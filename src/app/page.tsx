import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Now from "@/components/Now";
import Writing from "@/components/Writing";
import Beyond from "@/components/Beyond";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_URL, identity } from "@/content/site";

/**
 * Single page with anchored sections.
 *
 * Justification for not splitting into routes: the whole thing is ~2,400 words
 * of body copy. Every section earns its scroll, and the argument the site is
 * making — safety work first, industry work as evidence of the same instinct —
 * only lands if you read the sections in order. Splitting would hide the
 * argument behind navigation. `/resume` is the one separate route, because a
 * PDF is a different kind of object.
 */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: SITE_URL,
  email: `mailto:${identity.email}`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "KLA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Cornell University" },
    { "@type": "CollegeOrUniversity", name: "University of Wisconsin–Madison" },
  ],
  sameAs: [identity.github, identity.linkedin],
  knowsAbout: [
    "AI safety",
    "mechanistic interpretability",
    "steering vectors",
    "LLM evaluations",
    "AI control",
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="bg-ink text-paper sr-only rounded px-3 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Now />
        <Writing />
        <Beyond />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
