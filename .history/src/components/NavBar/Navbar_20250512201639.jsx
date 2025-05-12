import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser || null);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/AllCampaign">All Campaign</NavLink></li>
      <li><NavLink to="/AddNewCampaign">Add New Campaign</NavLink></li>
      <li><NavLink to="/MyCampaign">My Campaign</NavLink></li>
      <li><NavLink to="/MyDonations">My Donations</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-slate-300 dark:bg-gray-800 text-black dark:text-white rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 dark:bg-gray-900 rounded-box w-52 text-white">
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-10 w-10 rounded" src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg" alt="Logo" />
          <h1 className="font-bold">Crowd Funding</h1>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <img
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full cursor-pointer"
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              onClick={() => navigate("/Profile")}
            />
            <button
              onClick={async () => {
                await signOut(auth);
                navigate("/");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/LogIn">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-500">
                Log In
              </button>
            </NavLink>
            <NavLink to="/Register">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-500">
                Register
              </button>
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
