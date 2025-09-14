import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "night" ? "light" : "night";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out Successfully",
          text: "You have been logged out.",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.error("Logout error:", err));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative font-semibold px-3 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full ${
               isActive ? "text-yellow-400 after:w-full" : "text-gray-100"
             }`
          }
        >
          Home
        </NavLink>
      </li>
          <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative font-semibold px-3 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full ${
               isActive ? "text-yellow-400 after:w-full" : "text-gray-100"
             }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-task"
          className={({ isActive }) =>
            `relative font-semibold px-3 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full ${
               isActive ? "text-yellow-400  after:w-full" : "text-gray-100"
             }`
          }
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-tasks"
          className={({ isActive }) =>
            `relative font-semibold px-3 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full ${
               isActive ? "text-yellow-400  after:w-full" : "text-gray-100"
             }`
          }
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-posted-tasks"
          className={({ isActive }) =>
            `relative font-semibold px-3 py-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
             after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full ${
               isActive ? "text-yellow-400 after:w-full" : "text-gray-100"
             }`
          }
        >
          My Posted Tasks
        </NavLink>
      </li>
    </>
  );

  return (
   <div className="navbar fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-700 text-white shadow-md px-4 py-2">
      {/* Logo */}
      <div className="flex-1 flex items-center">
        <Link
          to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-purple-500 to-indigo-300 text-transparent bg-clip-text"
        >
          TaskNest
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-5">
        <ul className="flex gap-3 items-center">
          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 text-yellow-400 dark:text-gray-100 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>

          {navItems}

          {user ? (
            <>
              {/* Avatar */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
                />
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                  {user.displayName}
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogOut}
                className="px-5 py-2 rounded-3xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="px-5 py-2 rounded-3xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-3xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
              >
                Signup
              </Link>
            </div>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center gap-2 lg:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 text-yellow-400 dark:text-gray-100 transition"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-4 shadow bg-purple-600 w-36 text-gray-700 dark:text-gray-100 space-y-2"
          >
            {navItems}
            {user ? (
              <>
                <div className="flex flex-col items-center text-sm mb-2">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border"
                  />
                  <span className="mt-1">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-1 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
             <div className="flex flex-col items-center gap-2">
  <Link
    to="/login"
    className="w-full text-center px-4 py-2 rounded-3xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
  >
    Login
  </Link>
  <Link
    to="/signup"
    className="w-full text-center px-4 py-2 rounded-3xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
  >
    Signup
  </Link>
</div>

            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
