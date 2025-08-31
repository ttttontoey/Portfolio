export default function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">You can reach me via the following channels:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: example@mail.com</li>
        <li>LinkedIn: linkedin.com/in/example</li>
        <li>GitHub: github.com/example</li>
      </ul>
      <form className="flex flex-col max-w-md mx-auto">
        <input type="text" placeholder="Name" className="border p-2 mb-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 mb-2 rounded" />
        <textarea placeholder="Message" className="border p-2 mb-2 rounded" rows="4"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}
