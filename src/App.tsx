import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { go } from "./utils/scrollTo";

function App() {
  return (
    <div className="page">
      <Nav />
      <header className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Portfolio</p>
          <h1 className="hero-title typewriter">Raihan Carder</h1>
          <p className="hero-subtitle">
            I build clean, responsive web experiences and thoughtful digital
            products.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#" onClick={go("projects")}>
              View Projects
            </a>
            <a className="btn ghost" href="#" onClick={go("about")}>
              About Me
            </a>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="section-inner">
          <h2>About Me</h2>
          <p>
            Short bio here. Mention your background, what you are focused on,
            and what kind of work you enjoy.
          </p>
        </div>
      </section>

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

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            <a
              className="icon-link"
              href="mailto:yourname@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V18h16V7.2l-7.4 4.8a1 1 0 0 1-1.2 0L4 7.2zm1.7-.2L12 10.8 18.3 7H5.7z" />
              </svg>
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/your-handle/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM20.5 13.3V20h-3.43v-6.2c0-1.6-.57-2.7-1.98-2.7-1.08 0-1.72.72-2 1.41-.1.26-.12.62-.12.99V20H9.53s.05-10.7 0-11.5h3.44v1.63c.46-.7 1.28-1.7 3.12-1.7 2.28 0 3.99 1.5 3.99 4.87z" />
              </svg>
            </a>
          </div>
          <p className="footer-text">Created by Raihan Carder</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
