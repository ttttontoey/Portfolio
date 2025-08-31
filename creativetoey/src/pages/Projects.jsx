import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Portfolio Website", description: "My personal portfolio built with React.", link: "#" },
  { title: "Todo App", description: "A simple todo app using React and localStorage.", link: "#" },
  { title: "Weather App", description: "Weather forecast app using API data.", link: "#" },
];

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
