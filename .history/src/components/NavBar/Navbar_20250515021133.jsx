import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();

  // ✅ Apply saved theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Observe auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser || null);
    });
    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-emerald-400 font-semibold"
              : "hover:text-blue-500 dark:hover:text-emerald-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AllCampaign"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-emerald-400 font-semibold"
              : "hover:text-blue-500 dark:hover:text-emerald-300"
          }
        >
          All Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-emerald-400 font-semibold"
              : "hover:text-blue-500 dark:hover:text-emerald-300"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AboutUs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-emerald-400 font-semibold"
              : "hover:text-blue-500 dark:hover:text-emerald-300"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 dark:text-emerald-400 font-semibold"
              : "hover:text-blue-500 dark:hover:text-emerald-300"
          }
        >
          Contact Us
        </NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar backdrop-blur-md bg-slate-300/60 dark:bg-gray-800/60 text-black dark:text-white rounded-lg px-4 sticky top-0 z-50">
      {/* Left Side */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 dark:bg-gray-900 rounded-box w-52 text-white"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg"
            alt="Logo"
            className="h-10 w-10 rounded"
          />
          <h1 className="font-bold text-lg">Crowd Funding</h1>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={() => navigate("/Profile")}
              referrerPolicy="no-referrer"
            />
            <button
              onClick={handleSignOut}
              className="bg-slate-400  px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/LogIn">
              <button className={({ isActive }) =>
                isActive
                  ? "text-blue-700 dark:text-emerald-400 font-semibold"
                  : "hover:text-blue-700 dark:hover:text-emerald-300"
              }>LogIn</button>
            </NavLink>
            <NavLink to="/Register">
              <button className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-emerald-400 font-semibold"
                  : "hover:text-blue-500 dark:hover:text-emerald-300"
              }>Register</button>
            </NavLink>
          </>
        )}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-2"
        >
          {darkMode ? (
            <HiSun className="text-yellow-500" size={20} />
          ) : (
            <HiMoon className="text-gray-600" size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

