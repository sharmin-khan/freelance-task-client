import React from "react";
import { Link, NavLink } from "react-router";


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
          ${isActive ? "text-blue-600 after:w-full" : "text-gray-700"}`
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
          ${isActive ? "text-blue-600 after:w-full" : "text-gray-700"}`
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
          ${isActive ? "text-blue-600 after:w-full" : "text-gray-700"}`
        }
      >
        Browse Tasks
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/my-tasks"
        className={({ isActive }) =>
          `relative font-semibold px-3 py-1
          after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
          after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 
          hover:after:w-full 
          ${isActive ? "text-blue-600 after:w-full" : "text-gray-700"}`
        }
      >
        My Posted Tasks
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 py-2">
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
          {navItems}
        </ul>
        <Link
          to="/login"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded-3xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded-3xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
        >
          Signup
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
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
          className="menu menu-md dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-36 text-gray-700 text-lg space-y-2"
        >
          {navItems}
          <li>
            <Link
              to="/login"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition mt-2 text-center block"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-3xl text-md font-semibold hover:bg-blue-600 hover:text-white transition text-center block"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
