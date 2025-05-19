import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  /* ------------------------------------------------------------------ */
  /* state                                                               */
  /* ------------------------------------------------------------------ */
  const [user, setUser]           = useState(null);
  const [dark, setDark]           = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen]   = useState(false);   // hamburger ▼▲
  const [dashOpen, setDashOpen]   = useState(false);   // dashboard sub menu
  const navigate                  = useNavigate();

  /* ------------------------------------------------------------------ */
  /* side‑effects                                                        */
  /* ------------------------------------------------------------------ */
  /* theme on first load */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, []);                                 // eslint-disable-line react-hooks/exhaustive-deps

  /* auth listener */
  useEffect(() => auth.onAuthStateChanged(u => setUser(u || null)), []);

  /* keep <html> class synced when dark toggles later */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ------------------------------------------------------------------ */
  /* helpers                                                             */
  /* ------------------------------------------------------------------ */
  const closeAll = () => { setMenuOpen(false); setDashOpen(false); };

  const itemCls = ({ isActive }) =>
    isActive
      ? "text-blue-500 dark:text-emerald-400 font-semibold"
      : "hover:text-blue-500 dark:hover:text-emerald-300";

  /* dashboard sub‑routes (single source of truth) */
  const dashRoutes = [
    { to: "/dashboard/overview",         label: "Overview" },
    { to: "/dashboard/profile",          label: "Profile" },
    { to: "/dashboard/add-new-campaign", label: "Add New Campaign" },
    { to: "/dashboard/my-campaigns",     label: "My Campaigns" },
    { to: "/dashboard/my-donations",     label: "My Donations" },
  ];

  /* ------------------------------------------------------------------ */
  /* mark‑up                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-300/60 dark:bg-gray-800/60
                    text-black dark:text-white px-4 py-2 rounded-lg">
      <div className=" ">
        {/* brand + burger */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="open main menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor"
                 fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
          <img src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg"
               alt="logo" className="h-8 w-8 rounded" />
          <h1 className="font-bold text-base sm:text-lg whitespace-nowrap">Crowd Funding</h1>
        </div>

        {/* desktop links */}
        <ul className="hidden lg:flex menu menu-horizontal gap-6 ml-4">
          <li><NavLink to="/"          className={itemCls}>Home</NavLink></li>
          <li><NavLink to="/AllCampaign" className={itemCls}>All Campaign</NavLink></li>
          <li><NavLink to="/dashboard"   className={itemCls}>Dashboard</NavLink></li>
          <li><NavLink to="/AboutUs"     className={itemCls}>About Us</NavLink></li>
          <li><NavLink to="/ContactUs"   className={itemCls}>Contact Us</NavLink></li>
        </ul>

        {/* right controls */}
        <div className="flex items-center gap-2 ml-auto">
          {user ? (
            <>
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                className="h-8 w-8 rounded-full cursor-pointer"
                referrerPolicy="no-referrer"
                onClick={() => { closeAll(); navigate("/Profile"); }}
              />
              <button
                onClick={async () => { await signOut(auth); closeAll(); navigate("/"); }}
                className="bg-slate-300 dark:bg-gray-600 px-3 py-[2px] rounded text-sm
                           hover:bg-gray-400 dark:hover:bg-gray-500"
              >Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/LogIn"    className={itemCls} onClick={closeAll}>LogIn</NavLink>
              <NavLink to="/Register" className={itemCls} onClick={closeAll}>Register</NavLink>
            </>
          )}
          <button
            onClick={() => setDark(d => !d)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="toggle theme"
          >
            {dark ? <HiSun size={18} className="text-yellow-500"/> : <HiMoon size={18} className="text-gray-600" />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-3 mt-3">
          {/* top level */}
          <li><NavLink to="/" className={itemCls} onClick={closeAll}>Home</NavLink></li>
          <li><NavLink to="/AllCampaign" className={itemCls} onClick={closeAll}>All Campaign</NavLink></li>

          {/* dashboard accordion */}
          <li>
            <button
              className="flex w-full justify-between items-center"
              onClick={() => setDashOpen(o => !o)}
            >
              <span className={`${
                dashOpen ? "font-semibold text-blue-500 dark:text-emerald-400" : ""
              }`}>Dashboard</span>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd" />
              </svg>
            </button>
            {dashOpen && (
              <ul className="pl-4 flex flex-col gap-2 text-sm mt-2">
                {dashRoutes.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink to={to} className={itemCls} onClick={closeAll}>{label}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/AboutUs"   className={itemCls} onClick={closeAll}>About Us</NavLink></li>
          <li><NavLink to="/ContactUs" className={itemCls} onClick={closeAll}>Contact Us</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
