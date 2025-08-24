import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

function App() {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
    { title: 'Project 3', description: 'Description 3', link: '#' },
  ];

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  // Scroll reveal effect
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          entry.target.classList.remove('hidden');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div className="app">
      <Navbar />

      <section id="home" className="section hidden">
        <h1>Welcome to My Portfolio</h1>
        <p>This is my SPA portfolio with smooth scroll & animations.</p>
      </section>

      <section id="about" className="section hidden">
        <h1>About Me</h1>
        <p>I am a passionate developer with skills in React and web development.</p>
      </section>

      <section id="projects" className="section hidden">
        <h1>My Projects</h1>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} openModal={() => setModalContent(p)} />
          ))}
        </div>
      </section>

      <section id="skills" className="section hidden skills">
        <h1>My Skills</h1>
        <ul>
          {skills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section id="contact" className="section hidden">
        <h1>Contact Me</h1>
        <p>Email: your.email@example.com</p>
        <p>Phone: 012-345-6789</p>
      </section>

      <Footer />

      {modalContent && (
        <div className={`modal show`} onClick={() => setModalContent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <a href={modalContent.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
