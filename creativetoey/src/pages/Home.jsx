import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.$) {
      window.$("section").ripples({
        resolution: 512,
        dropRadius: 20, // ขนาดวง ripple
        perturbance: 0.04, // ความแรงของคลื่น
      });
    }
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Hi
      </h1>
      <p className="mb-6 text-lg text-gray-700">I'm Mongkolrach</p>
      <p className="mb-4 text-xs text-gray-700">a Frontend Developer.</p>
      <div className="mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img src="water.jpg" alt="Profile" className="w-full h-full object-cover"/>
      </div>
      <p className="mt-6 text-gray-600">Explore my projects and skills below!</p>
    </div>
  );
}



// export default function Home() {
//   return (
//     <section className="p-16 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-purple-100 via-white to-purple-50">
//       <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
//         Hi
//       </h1>
//       <p className="mb-6 text-lg text-gray-700">I'm Mongkolrach</p>
//       <p className="mb-4 text-xs text-gray-700">a Frontend Developer.</p>
//       <div className="mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
//         <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover"/>
//       </div>
//       <p className="mt-6 text-gray-600">Explore my projects and skills below!</p>
//     </section>
//   );
// }
