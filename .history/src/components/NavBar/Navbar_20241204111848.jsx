// src/components/Navbar/Navbar.jsx
import { FaUser } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase"; // Firebase auth import
import { signOut } from "firebase/auth"; // Firebase signOut method
import { useState, useEffect } from "react"; // React hooks for state and effect

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold the user data
  const location = useLocation(); // Get current route location
  const navigate = useNavigate(); // For navigation after login/logout

  // Fetch user auth state when component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // Set the user when logged in
      } else {
        setUser(null); // Set null if logged out
      }
    });
    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  // Links for navigation (do not include the Login/Logout button here)
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/DonationCampaigns">Donation Campaigns</NavLink></li>
      <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/HowToHelp">How to Help</NavLink></li>
    </>
  );

  // Conditional background color based on route
  const navbarBgColor = location.pathname === '/' ? 'bg-blue-600 text-white rounded-t-xl' : 'bg-white text-black';

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth); // Firebase sign out method
    navigate("/"); // Navigate back to home after logout
  };

  return (
    <div>
      <div className={`navbar ${navbarBgColor}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className="h-1/6 w-2/12 rounded-lg" src="https://media.istockphoto.com/id/1732008587/vector/winter-clothes-donation-vector-illustration-in-flat-style.jpg?s=612x612&w=0&k=20&c=X9Q0U1cU0CVCgk3Hxb5HTiLcZJShgTMrkts7ixwV4hk=" alt="" />
            <h1>Winter Clothing Donation</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <h2><FaUser /></h2>
          {/* Conditionally display user's profile picture or login button */}
          {user ? (
            <>
              <img
                className="h-8 w-8 rounded-full"
                src={user.photoURL || "https://via.placeholder.com/150"} // Display user photo or placeholder
                alt="User"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink to="/LogIn">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Log In
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
