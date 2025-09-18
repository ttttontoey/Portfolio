/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // น้ำเงินหลัก
        dark: "#111827",   // พื้นหลัง dark mode
        light: "#f9fafb",  // สีพื้นหลังอ่อน
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ใช้ Inter เป็นฟอนต์หลัก
      },
    },
  },
  darkMode: "class", // เปิดใช้ Dark Mode แบบ toggle
  plugins: [],
}
