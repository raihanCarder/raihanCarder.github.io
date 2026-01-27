import Skill from "./Skill";
export default function SkillSection() {
  return (
    <section className="section alt" id="skills">
      <div className="section-inner">
        <h2>Skills</h2>
        <div className="skills-row">
          <Skill name="React" />
          <Skill name="TypeScript" />
          <Skill name="CSS" />
          <Skill name="UI Design" />
          <Skill name="Accessibility" />
        </div>
      </div>
    </section>
  );
}
