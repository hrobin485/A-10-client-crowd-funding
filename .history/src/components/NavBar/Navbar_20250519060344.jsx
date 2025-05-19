import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);          // hamburger open/close
  const [dashOpen, setDashOpen] = useState(false);  // dashboard sub‑menu (mobile only)
  const navigate = useNavigate();

  /* ------------------------------------------------------------------
   *  theme + auth observers
   * ----------------------------------------------------------------*/
  useEffect(() => {
    document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => auth.onAuthStateChanged(u => setUser(u || null)), []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  /* ------------------------------------------------------------------
   *  helper utils
   * ----------------------------------------------------------------*/
  const closeMenus = () => {
    setOpen(false);
    setDashOpen(false);
  };

  const active = "text-blue-500 dark:text-emerald-400 font-semibold";
  const normal = "hover:text-blue-500 dark:hover:text-emerald-300";
  const linkCls = ({ isActive }) => (isActive ? active : normal);

  /* ------------------------------------------------------------------
   *  link groups
   * ----------------------------------------------------------------*/
  const desktopLinks = (
    <>
      <li><NavLink to="/" className={linkCls}>Home</NavLink></li>
      <li><NavLink to="/AllCampaign" className={linkCls}>All Campaign</NavLink></li>
      <li><NavLink to="/dashboard" className={linkCls}>Dashboard</NavLink></li>
      <li><NavLink to="/AboutUs" className={linkCls}>About Us</NavLink></li>
      <li><NavLink to="/ContactUs" className={linkCls}>Contact Us</NavLink></li>
    </>
  );

  // dashboard sub‑routes (single source of truth)
  const dashRoutes = [
    { to: "/dashboard/overview", label: "Overview" },
    { to: "/dashboard/profile", label: "Profile" },
    { to: "/dashboard/add-new-campaign", label: "Add New Campaign" },
    { to: "/dashboard/my-campaigns", label: "My Campaigns" },
    { to: "/dashboard/my-donations", label: "My Donations" },
  ];

  const dashSub = (
    <ul className="pl-4 flex flex-col gap-2 text-sm">
      {dashRoutes.map(({ to, label }) => (
        <li key={to}><NavLink to={to} className={linkCls} onClick={closeMenus}>{label}</NavLink></li>
      ))}
    </ul>
  );

  const mobileLinks = (
    <>
      <li><NavLink to="/" className={linkCls} onClick={closeMenus}>Home</NavLink></li>
      <li><NavLink to="/AllCampaign" className={linkCls} onClick={closeMenus}>All Campaign</NavLink></li>
      <li>
        <button
          type="button"
          className="flex items-center justify-between w-full"
          onClick={() => setDashOpen(prev => !prev)}
        >
          <span className={`${dashOpen ? "font-semibold text-blue-500 dark:text-emerald-400" : ""}`}>Dashboard</span>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {dashOpen && dashSub}
      </li>
      <li><NavLink to="/AboutUs" className={linkCls} onClick={closeMenus}>About Us</NavLink></li>
      <li><NavLink to="/ContactUs" className={linkCls} onClick={closeMenus}>Contact Us</NavLink></li>
    </>
  );

  /* ------------------------------------------------------------------*/
  return (
    <nav className="backdrop-blur-md bg-slate-300/60 dark:bg-gray-800/60 text-black dark:text-white rounded-lg px-4 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between py-2 gap-y-2 ">
        {/* brand + hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button type="button" className="lg:hidden p-2" onClick={() => setOpen(prev => !prev)}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
          <img src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg" alt="logo" className="h-8 w-8 rounded" />
          <h1 className="font-bold text-base sm:text-lg whitespace-nowrap">Crowd Funding</h1>
        </div>

        {/* desktop nav */}
        <ul className="hidden lg:ml-24 lg:flex menu menu-horizontal gap-6 lg:gap-1">{desktopLinks}</ul>

        {/* right‑side controls */}
        <div className="flex items-center gap-2 ml-auto">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                className="h-8 w-8 rounded-full" referrerPolicy="no-referrer"
                onClick={() => { closeMenus(); navigate("/Profile"); }}
              />
              <button
                type="button"
                onClick={async () => { await signOut(auth); closeMenus(); navigate("/"); }}
                className="bg-slate-300 dark:bg-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-500"
              >Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/LogIn" className={linkCls} onClick={closeMenus}>LogIn</NavLink>
              <NavLink to="/Register" className={linkCls} onClick={closeMenus}>Register</NavLink>
            </>
          )}
          <button type="button" onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <HiSun size={18} className="text-yellow-500" /> : <HiMoon size={18} className="text-gray-600" />}
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <ul className="w-full lg:hidden flex flex-col gap-3 mt-2 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-600">
            {mobileLinks}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;