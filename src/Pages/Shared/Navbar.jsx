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
          after:h-[2px] after:bg-blue-200 dark:after:bg-black after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-200 dark:text-black after:w-full"
              : "text-black dark:text-gray-100"
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
          after:h-[2px] after:bg-blue-200 dark:after:bg-black after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-200 dark:text-black after:w-full"
              : "text-black dark:text-gray-100"
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
          after:h-[2px] after:bg-blue-200 dark:after:bg-black after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-200 dark:text-black after:w-full"
              : "text-black dark:text-gray-100"
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
          after:h-[2px] after:bg-blue-200 dark:after:bg-black after:transition-all after:duration-300 
          hover:after:w-full 
          ${
            isActive
              ? "text-blue-200 dark:text-black after:w-full"
              : "text-black dark:text-gray-100"
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
  //  console.log(user); 

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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "night"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  return (
   <div className="navbar bg-gradient-to-r from-indigo-800 to-purple-600 text-white shadow-md px-4 py-2">
      {/* Logo */}
   <div className="flex-1 flex items-center">
  {/* Main Logo */}
  <Link
    to="/"
    className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-purple-500 to-indigo-300 text-transparent bg-clip-text flex items-center justify-center gap-1"
  >
    <span>TaskNest</span>
  </Link>

</div>

      {/* Desktop Menu + Auth */}
      <div className="hidden lg:flex items-center space-x-5">
        <ul className="flex gap-3 items-center">
          {/* Theme Toggle */}
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
              className="p-2 text-yellow-500 dark:text-gray-100 transition cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>

          {navItems}

          {user ? (
            <>
              {/* Avatar + Hover Tooltip */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-blue-200 object-cover cursor-pointer"
                />
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
                  {user.displayName}
                </div>
              </div>

              {/* Log Out Button */}
              <button
                onClick={handleLogOut}
                className="border-2 border-blue-400 bg-blue-400 text-black hover:text-white hover:bg-transparent hover:border-blue-400 px-4 py-2 rounded-3xl text-md font-semibold transition cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="border-2 border-blue-400 bg-blue-400 text-black hover:text-white hover:bg-transparent hover:border-blue-400 px-4 py-2 rounded-3xl text-md font-semibold transition cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border-2 border-blue-400 bg-blue-400 text-black hover:text-white hover:bg-transparent hover:border-blue-400 px-4 py-2 rounded-3xl text-md font-semibold transition cursor-pointer"
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
              <>
                {/* Avatar with name */}
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
                  className="border border-blue-600 text-blue-600 px-4 py-1 rounded-md text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  Log Out
                </button>
              </>
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
