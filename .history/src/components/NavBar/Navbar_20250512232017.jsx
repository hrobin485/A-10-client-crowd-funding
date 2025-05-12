import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successful sign out');
            })
            .catch(error => {
                console.log('failed to sign out. stay here. don\'t leave me alone');
            });
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `dark:text-gray-100 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AllCampaign"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          All Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddNewCampaign"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          Add New Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/MyCampaign"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          My Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/MyDonations"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          My Donations
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-300 dark:bg-gray-800 text-black dark:text-white rounded-lg px-4">
      {/* Left Side */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 dark:bg-gray-900 rounded-box w-52 text-white">
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
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/LogIn">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-500">Log In</button>
            </NavLink>
            <NavLink to="/Register">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-500">Register</button>
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
