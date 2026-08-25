import { skillGroups } from "@/content/skills";
import Section from "./Section";
import Reveal from "./Reveal";
import Tags from "./Tags";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="skills">
      <Reveal className="space-y-7">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="u-label">{g.label}</h3>
            <div className="mt-3">
              <Tags items={g.items} />
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
