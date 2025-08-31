const tools = ["React", "TailwindCSS", "JavaScript", "TypeScript", "Git", "Vite"];

export default function Tools() {
  return (
    <section className="p-16 min-h-screen bg-gradient-to-r from-purple-50 via-white to-pink-50">
  <h2 className="text-4xl font-bold mb-6 text-purple-700">About Me</h2>
  <p className="text-gray-700 mb-4">I'm a passionate developer...</p>
  <ul className="list-disc list-inside text-gray-700">
    <li>React / TailwindCSS</li>
    <li>JavaScript / TypeScript</li>
    <li>Git / GitHub</li>
  </ul>
</section>

  );
}
