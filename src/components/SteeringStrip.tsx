"use client";

import { useId, useMemo, useState } from "react";

/**
 * The signature element.
 *
 * A steering vector is a direction in a model's residual stream that you add at
 * inference time, scaled by some coefficient. This is that, made draggable: the
 * point cloud is a projection of activations, the arrow is the vector, and the
 * response is what the model says at each coefficient.
 *
 * The responses are illustrative of the sycophancy direction, not logged
 * generations — labeled as such in the UI so nothing here reads as a benchmark.
 */

const STEPS = [
  {
    lambda: "−2.0",
    label: "blunt",
    text: "This doesn't work. Rentals in this category are a solved problem and your unit economics are underwater from day one.",
  },
  {
    lambda: "−1.0",
    label: "direct",
    text: "I don't think this holds up. The market is crowded and the margins look thin — you'd need a distribution advantage you haven't described.",
  },
  {
    lambda: "0.0",
    label: "unsteered",
    text: "It's a competitive space. The idea could work with a clear wedge, but the economics depend on acquisition cost, which is worth pinning down first.",
  },
  {
    lambda: "+1.0",
    label: "agreeable",
    text: "That's a solid idea — there's real demand here, and with the right execution I think you'd find traction pretty quickly.",
  },
  {
    lambda: "+2.0",
    label: "sycophantic",
    text: "Honestly, this is brilliant. You've spotted something everyone else has missed and I think it's going to be huge.",
  },
] as const;

/** Deterministic PRNG so server and client render identical point clouds. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 420;
const H = 190;

/** Vector direction the cloud travels along, in SVG units per unit of lambda. */
const DIR = { x: 46, y: -17 };

function useCloud() {
  return useMemo(() => {
    const rand = mulberry32(20260525);
    // Gaussian-ish via sum of uniforms — an activation cloud, not a scatter plot.
    const g = () => (rand() + rand() + rand() - 1.5) / 1.5;
    return Array.from({ length: 54 }, () => ({
      x: W / 2 + g() * 118,
      y: H / 2 + g() * 55,
      r: 2.2 + rand() * 3.4,
      o: 0.25 + rand() * 0.45,
    }));
  }, []);
}

export default function SteeringStrip() {
  const [i, setI] = useState(2);
  const cloud = useCloud();
  const id = useId();
  const step = STEPS[i];
  const lambda = i - 2;

  const dx = DIR.x * lambda;
  const dy = DIR.y * lambda;

  return (
    <figure className="not-prose m-0">
      <div className="border-line bg-panel overflow-hidden rounded-lg border">
        {/* Header */}
        <div className="border-line flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b px-4 py-2.5 sm:px-5">
          <span className="u-label">steering demo · sycophancy direction</span>
          <span className="text-muted font-mono text-[11px]">
            h ← h + <span className="text-signal">λ</span>·v
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Latent space */}
          <div className="border-line border-b p-4 sm:p-5 md:border-r md:border-b-0">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label={`Activation cloud displaced by a steering vector at lambda ${step.lambda}.`}
            >
              <defs>
                <marker
                  id={`${id}-arrow`}
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--color-signal)" />
                </marker>
              </defs>

              {/* Ghost of the unsteered cloud */}
              <g>
                {cloud.map((p, n) => (
                  <circle
                    key={`g${n}`}
                    cx={p.x}
                    cy={p.y}
                    r={p.r}
                    fill="var(--color-ink)"
                    opacity={0.1}
                  />
                ))}
              </g>

              {/* Steered cloud */}
              <g
                style={{
                  transform: `translate(${dx}px, ${dy}px)`,
                  transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {cloud.map((p, n) => (
                  <circle
                    key={n}
                    cx={p.x}
                    cy={p.y}
                    r={p.r}
                    fill={lambda === 0 ? "var(--color-ink)" : "var(--color-signal)"}
                    opacity={p.o}
                    style={{ transition: "fill 380ms linear" }}
                  />
                ))}
              </g>

              {/* The vector itself */}
              {lambda !== 0 && (
                <line
                  x1={W / 2}
                  y1={H / 2}
                  x2={W / 2 + dx}
                  y2={H / 2 + dy}
                  stroke="var(--color-signal)"
                  strokeWidth="1.5"
                  markerEnd={`url(#${id}-arrow)`}
                  style={{ transition: "all 380ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
              )}
              <circle cx={W / 2} cy={H / 2} r="2.5" fill="var(--color-ink)" />
            </svg>
          </div>

          {/* Response */}
          <div className="flex flex-col justify-between gap-4 p-4 sm:p-5">
            <div>
              <p className="text-muted font-mono text-[11px]">
                prompt · &ldquo;here&rsquo;s my startup idea — what do you think?&rdquo;
              </p>
              <p
                key={i}
                aria-live="polite"
                className="text-ink mt-2 text-[15px] leading-relaxed sm:text-base"
              >
                {step.text}
              </p>
            </div>
            <p className="text-muted font-mono text-[11px]">
              response is illustrative, not a logged generation
            </p>
          </div>
        </div>

        {/* Control */}
        <div className="border-line flex items-center gap-4 border-t px-4 py-3 sm:px-5">
          <label
            htmlFor={`${id}-range`}
            className="text-muted shrink-0 font-mono text-[13px] normal-case"
          >
            λ
          </label>
          <input
            id={`${id}-range`}
            type="range"
            min={0}
            max={4}
            step={1}
            value={i}
            onChange={(e) => setI(Number(e.target.value))}
            aria-valuetext={`lambda ${step.lambda}, ${step.label}`}
            className="u-range bg-panel-2 h-1.5 w-full min-w-0 cursor-pointer appearance-none rounded-full"
          />
          <span className="text-ink shrink-0 font-mono text-xs tabular-nums">
            {step.lambda}
          </span>
          <span className="text-muted hidden shrink-0 font-mono text-[11px] sm:inline">
            {step.label}
          </span>
        </div>
      </div>
      <figcaption className="text-muted mt-3 max-w-prose text-sm">
        This is what my flagship project does, except the vector is generated from a
        sentence of English instead of collected from labeled examples.
      </figcaption>

      <style jsx>{`
        .u-range::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: var(--color-signal);
          border: 3px solid var(--color-paper);
          box-shadow: 0 0 0 1px var(--color-signal);
          cursor: pointer;
        }
        .u-range::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: var(--color-signal);
          border: 3px solid var(--color-paper);
          box-shadow: 0 0 0 1px var(--color-signal);
          cursor: pointer;
        }
      `}</style>
    </figure>
  );
}
