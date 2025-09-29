import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "HACKATON CDG", description: "My personal portfolio built with React.", link: "#", image: "/images/cdg.jpg" },
  { title: "๒D Animation", description: "A simple todo app using React and localStorage.", link: "#", image: "/images/RB.jpg" },
  { title: "IT Career Camp 2025 : Tokio Marine Life Insurance (Thailand) PCL", description: "Weather forecast app using API data.", link: "#", image: "/images/tokiyo.jpg" },
];

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}