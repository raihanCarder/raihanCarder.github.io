import { go } from "../utils/scrollTo";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="brand-group">
          <a
            className="nav-icon-link"
            href="https://github.com/raihanCarder"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.35-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.64-4.55 4.88.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a className="brand" href="#" onClick={go("top")}>
            Raihan Carder
          </a>
        </div>
        <div className="nav-links">
          <a href="#" onClick={go("top")}>
            Home
          </a>
          <a href="#" onClick={go("about")}>
            About
          </a>
          <a href="#" onClick={go("skills")}>
            Skills
          </a>
          <a href="#" onClick={go("projects")}>
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
