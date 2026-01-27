import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="page">
      <Nav />
      <Header />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
