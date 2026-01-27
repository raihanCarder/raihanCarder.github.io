import { go } from "../utils/scrollTo";
export default function Header() {
  return (
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
  );
}
