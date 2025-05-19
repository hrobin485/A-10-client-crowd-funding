```jsx
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);            // hamburger menu (mobile)
  const [dashOpen, setDashOpen] = useState(false);    // dashboard accordion (mobile)

  /* ---------------------------------------------------------------- */
  /*  theme + auth observers                                          */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => auth.onAuthStateChanged(u => setUser(u || null)), []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  /* ---------------------------------------------------------------- */
  /*  helpers                                                         */
  /* ---------------------------------------------------------------- */
  const active = "text-blue-500 dark:text-emerald-400 font-semibold";
  const normal = "hover:text-blue-500 dark:hover:text-emerald-300";
  const item   = ({ isActive }: { isActive: boolean }) => (isActive ? active : normal);

  // close hamburger when navigating (mobile only)
  const closeMenus = () => {
    setOpen(false);
    setDashOpen(false);
  };

  /* ---------------------------------------------------------------- */
  /*  link groups                                                     */
  /* ---------------------------------------------------------------- */
  const desktopLinks = (
    <>
      <li><NavLink to="/"            className={item}>Home</NavLink></li>
      <li><NavLink to="/AllCampaign" className={item}>All Campaign</NavLink></li>
      <li><NavLink to="/Dashboard"   className={item}>Dashboard</NavLink></li>
      <li><NavLink to="/AboutUs"     className={item}>About Us</NavLink></li>
      <li><NavLink to="/ContactUs"   className={item}>Contact Us</NavLink></li>
    </>
  );

  /*  dashboard sub‑links – mobile accordion only                     */
  const dashSub = (
    <ul className="pl-4 flex flex-col gap-2 text-sm">
      <li><NavLink to="/Dashboard/Overview"    className={item} onClick={closeMenus}>Overview</NavLink></li>
      <li><NavLink to="/Dashboard/MyCampaigns" className={item} onClick={closeMenus}>My Campaigns</NavLink></li>
      <li><NavLink to="/Dashboard/Donations"   className={item} onClick={closeMenus}>Donations</NavLink></li>
      {user?.email === "admin@example.com" && (
        <li><NavLink to="/Dashboard/Admin" className={item} onClick={closeMenus}>Admin Panel</NavLink></li>
      )}
    </ul>
  );

  /*  mobile main links                                               */
  const mobileLinks = (
    <>
      <li><NavLink to="/"            className={item} onClick={closeMenus}>Home</NavLink></li>
      <li><NavLink to="/AllCampaign" className={item} onClick={closeMenus}>All Campaign</NavLink></li>
      <li>
        {/* accordion toggle, keep hamburger open while accordion is interacted with */}
        <button
          type="button"
          className="flex items-center justify-between w-full"
          onClick={() => setDashOpen(!dashOpen)}
        >
          <span className={`${dashOpen ? active : normal.replace("hover:", "")}`}>Dashboard</span>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {dashOpen && dashSub}
      </li>
      <li><NavLink to="/AboutUs"   className={item} onClick={closeMenus}>About Us</NavLink></li>
      <li><NavLink to="/ContactUs" className={item} onClick={closeMenus}>Contact Us</NavLink></li>
    </>
  );

  /* ---------------------------------------------------------------- */
  /*  markup                                                          */
  /* ---------------------------------------------------------------- */
  return (
    <nav className="backdrop-blur-md bg-slate-300/60 dark:bg-gray-800/60 text-black dark:text-white rounded-lg px-4 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-2 gap-y-2">
        {/* left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* hamburger button */}
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
          <img src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg" alt="logo" className="h-8 w-8 rounded" />
          <h1 className="font-bold text-base sm:text-lg whitespace-nowrap">Crowd Funding</h1>
        </div>

        {/* desktop links */}
        <ul className="hidden lg:ml-24 lg:flex menu menu-horizontal gap-6">{desktopLinks}</ul>

        {/* right */}
        <div className="flex items-center gap-2 ml-auto">
          {user ? (
            <>
              <img src={user.photoURL || "https://via.placeholder.com/150"} className="h-8 w-8 rounded-full" referrerPolicy="no-referrer" onClick={() => navigate("/Profile")}/>
              <button onClick={async () => { await signOut(auth); navigate("/"); }} className="bg-slate-300 dark:bg-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-500">Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/LogIn"    className={item} onClick={closeMenus}>LogIn</NavLink>
              <NavLink to="/Register" className={item} onClick={closeMenus}>Register</NavLink>
            </>
          )}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <HiSun size={18} className="text-yellow-500"/> : <HiMoon size={18} className="text-gray-600"/>}
          </button>
        </div>

        {/* mobile dropdown */}
        {open && (
          <ul className="w-full lg:hidden flex flex-col gap-3 mt-2">
            {mobileLinks}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```
