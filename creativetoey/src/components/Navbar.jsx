import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
