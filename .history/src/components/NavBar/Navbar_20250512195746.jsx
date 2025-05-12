import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi"; // Dark mode icons

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) setUser(authUser);
      else setUser(null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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

  const navbarBgColor = location.pathname === '/'
    ? 'bg-[#0a1128] text-white rounded-t-xl'
    : 'bg-[#ffc8dd] text-black dark:bg-gray-800 dark:text-white';

  return (
    <div className={`navbar ${navbarBgColor}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-700 dark:bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img className="h-1/6 w-2/12 rounded-lg" src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg" alt="" />
          <h1>Crowd Funding</h1>
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
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/LogIn">
              <button className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#00aaff]">
                Log In
              </button>
            </NavLink>
            <NavLink to="/Register">
              <button className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#00aaff]">
                Register
              </button>
            </NavLink>
          </>
        )}

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-2"
        >
          {darkMode ? <HiSun className="text-yellow-500" size={20} /> : <HiMoon className="text-gray-600" size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
