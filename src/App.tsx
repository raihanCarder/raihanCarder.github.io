import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import { Toaster } from "react-hot-toast";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <div className="page">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Nav />
      <Header />
      <AboutMe />
      <EducationSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
