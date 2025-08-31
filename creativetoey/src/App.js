import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Resume from "./pages/Resume";
import Transcript from "./pages/Transcript";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home" ><Home /></section>
      <section id="about" ><About /></section>
      <section id="projects" ><Projects /></section>
      <section id="tools"><Tools /></section>
      <section id="resume" ><Resume /></section>
      <section id="transcript" ><Transcript /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
