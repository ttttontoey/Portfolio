export default function Home() {
  return (
    <section className="p-16 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-purple-100 via-white to-purple-50">
      <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Welcome to My Portfolio
      </h1>
      <p className="mb-6 text-lg text-gray-700">Hi! I'm [Your Name], a Frontend Developer.</p>
      <div className="mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover"/>
      </div>
      <p className="mt-6 text-gray-600">Explore my projects and skills below!</p>
    </section>
  );
}
