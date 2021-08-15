import "./app.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
