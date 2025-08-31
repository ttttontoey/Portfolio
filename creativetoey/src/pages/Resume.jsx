export default function Resume() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="mb-4">You can download my resume below:</p>
      <a href="/resume.pdf" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Download Resume
      </a>
    </section>
  );
}
