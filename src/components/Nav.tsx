import { go } from "../utils/scrollTo";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#" onClick={go("top")}>
          Raihan Carder
        </a>
        <div className="nav-links">
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
