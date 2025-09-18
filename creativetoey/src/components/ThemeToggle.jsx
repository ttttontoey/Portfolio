import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle Theme"  
      className="theme-icon-btn"
    >
      {theme === "light" ? "⚝" : "🔆"}
    </button>
  );
}
