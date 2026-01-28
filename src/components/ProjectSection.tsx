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
            link=""
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
          <Project
            title="PulseFit Dashboard"
            description="Fitness analytics dashboard with workout streaks, goal tracking, and smart insights."
            image="/project-4.jpg"
            skills={["Next.js", "Charting", "Node", "MongoDB"]}
            link="https://example.com"
            completed
          />
          <Project
            title="CampusLink"
            description="UofT student hub for events, study rooms, and quick campus navigation."
            image="/project-5.jpg"
            skills={["React", "Maps API", "TypeScript", "Firebase"]}
            link="https://example.com"
            completed={false}
          />
          <Project
            title="Redline AI Notes"
            description="AI-assisted lecture note cleaner with summaries, tags, and export to PDF."
            image="/project-6.jpg"
            skills={["Python", "NLP", "FastAPI", "Tailwind"]}
            link="https://example.com"
            completed
          />
        </div>
      </div>
    </section>
  );
}
