import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  return (
    <nav>
        <div className="logo">MyPortfolio</div>
        <div className="nav-left">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#tools">Tools</a>
        <a href="#resume">Resume</a>
        <a href="#transcript">Transcript</a>
        <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
            <ThemeToggle />
        </div>
</nav>

  );
}
