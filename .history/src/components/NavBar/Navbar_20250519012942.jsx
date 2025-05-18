import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile drawer state

  // apply saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // auth state
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u || null));
    return unsub;
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navItemClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 dark:text-emerald-400 font-semibold"
      : "hover:text-blue-500 dark:hover:text-emerald-300";

  const navLinks = (
    <>
      <li><NavLink to="/" className={navItemClass}>Home</NavLink></li>
      <li><NavLink to="/AllCampaign" className={navItemClass}>All Campaign</NavLink></li>
      <li><NavLink to="/Dashboard" className={navItemClass}>Dashboard</NavLink></li>
      <li><NavLink to="/AboutUs" className={navItemClass}>About Us</NavLink></li>
      <li><NavLink to="/ContactUs" className={navItemClass}>Contact Us</NavLink></li>
    </>
  );

  return (
    <nav className="backdrop-blur-md bg-slate-300/60 dark:bg-gray-800/60 text-black dark:text-white rounded-lg px-4 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
        {/* brand */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
          <img src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg" alt="logo" className="h-10 w-10 rounded" />
          <h1 className="font-bold text-lg">Crowd Funding</h1>
        </div>

        {/* desktop links */}
        <ul className="hidden lg:flex menu menu-horizontal gap-4">{navLinks}</ul>

        {/* right */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                className="h-8 w-8 rounded-full cursor-pointer" onClick={() => navigate("/Profile")} referrerPolicy="no-referrer"
              />
              <button onClick={async () => { await signOut(auth); navigate("/"); }} className="bg-slate-300 dark:bg-gray-600 px-3 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500 text-sm">Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/LogIn" className={navItemClass}>Log In</NavLink>
              <NavLink to="/Register" className={navItemClass}>Register</NavLink>
            </>
          )}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <HiSun size={20} className="text-yellow-500" /> : <HiMoon size={20} className="text-gray-600" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-3 px-4 pb-4 text-sm" onClick={() => setIsOpen(false)}>
          {navLinks}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
