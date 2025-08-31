export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border border-gray-200 bg-white/50 backdrop-blur-xs p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"
         className="text-accent font-semibold hover:underline">
        View Project
      </a>
    </div>
  );
}
