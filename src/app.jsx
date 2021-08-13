import "./app.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
