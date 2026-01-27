import Project from "./Project";

export default function ProjectSection() {
  return (
    <section className="section" id="projects">
      <div className="section-inner wide">
        <h2>Projects</h2>
        <div className="cards">
          <Project
            title="Project One"
            description="One sentence about what it does and your role."
            image="/project-1.jpg"
            skills={["React", "TypeScript", "CSS"]}
            link="https://example.com"
            completed
          />
          <Project
            title="Project Two"
            description="One sentence about what it does and your role."
            image="/project-2.jpg"
            skills={["UI Design", "Accessibility"]}
            link="https://example.com"
            completed={false}
          />
          <Project
            title="Project Three"
            description="One sentence about what it does and your role."
            image="/project-3.jpg"
            skills={["Vite", "React", "Animation"]}
            link="https://example.com"
            completed
          />
        </div>
      </div>
    </section>
  );
}
