import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded shadow-md z-50 transition-colors"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? "☀ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
    );
};

export default ThemeToggle;
