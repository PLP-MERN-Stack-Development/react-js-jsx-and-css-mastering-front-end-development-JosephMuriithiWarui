import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Task Manager
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/tasks" className="hover:text-blue-500">Tasks</Link>
          <Link to="/users" className="hover:text-blue-500">Users</Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded-lg border dark:border-gray-600 border-gray-300
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden ml-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl text-gray-900 dark:text-white">&times;</span>
          ) : (
            <span className="text-2xl text-gray-900 dark:text-white">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-100 dark:bg-gray-900">
          <Link to="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/tasks" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Tasks</Link>
          <Link to="/users" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Users</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
