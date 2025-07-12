import React, { useState, useEffect, use } from "react";
import { Link, NavLink } from "react-router";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const navItems = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative font-semibold px-3 py-1
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
          after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-600 after:w-full"
              : "text-gray-700 dark:text-gray-200"
          }`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          `relative font-semibold px-3 py-1
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
          after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-600 after:w-full"
              : "text-gray-700 dark:text-gray-200"
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
          `relative font-semibold px-3 py-1
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
          after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-600 after:w-full"
              : "text-gray-700 dark:text-gray-200"
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
          `relative font-semibold px-3 py-1
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
          after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-600 after:w-full"
              : "text-gray-700 dark:text-gray-200"
          }`
        }
      >
        My Posted Tasks
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("User logged out successfully");
        Swal.fire({
          icon: "success",
          title: "Log out Successfully",
          text: "You have been logged out.",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
  // Theme state and persistence
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "night"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="navbar bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md dark:shadow-[0_2px_8px_0_rgba(243,244,246,0.25)] px-4 py-2">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-gray-800 text-transparent bg-clip-text"
        >
          TaskNest
        </Link>
      </div>

      {/* Desktop Menu + Auth */}
      <div className="hidden lg:flex items-center space-x-5">
        <ul className="flex gap-3 items-center">
          {/* Theme Toggle to the left of Home */}
          <li className="flex items-center">
            <button
              onClick={() => {
                const newTheme = theme === "night" ? "light" : "night";
                setTheme(newTheme);
                localStorage.setItem("theme", newTheme);
                document
                  .querySelector("html")
                  .setAttribute("data-theme", newTheme);
              }}
              className="p-2 text-yellow-500 dark:text-gray-100 transition"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
          {navItems}
          {user ? (
            <button
              onClick={handleLogOut}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              Log Out
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
              >
                Signup
              </Link>
            </div>
          )}
        </ul>
      </div>

      {/* Mobile Menu: Theme Toggle left of Hamburger */}
      <div className="flex items-center gap-2 lg:hidden">
        {/* Theme Toggle to the left of menu button */}
        <button
          onClick={() => {
            const newTheme = theme === "night" ? "light" : "night";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            document.querySelector("html").setAttribute("data-theme", newTheme);
          }}
          className="p-2 text-yellow-500 dark:text-gray-100 transition"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        {/* Hamburger menu */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
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
            className="menu menu-md dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 dark:bg-gray-900 rounded-box w-36 text-gray-700 text-lg space-y-2 dark:text-gray-100"
          >
            {navItems}
            {user ? (
              <button
                onClick={handleLogOut}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
              >
                Log Out
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
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
