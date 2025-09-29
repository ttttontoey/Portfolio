export default function ProjectCard({ title, description, link, image }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform transform hover:-translate-y-2">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        <a href={link} className="text-purple-600 hover:underline">View Project</a>
      </div>
    </div>
  );
}