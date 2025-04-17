import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
