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
        console.log("Authenticated user:", authUser); // Log the user object for debugging
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
  const navbarBgColor = location.pathname === '/' ? 'bg-[#0a1128] text-white rounded-t-xl' : 'bg-[#ffc8dd] text-black';

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
            <img className="h-1/6 w-2/12 rounded-lg" src="https://img.freepik.com/free-photo/business-crowdfunding_53876-105720.jpg?t=st=1734202774~exp=1734206374~hmac=e8d14a30e8d5f1f7913df2178ae536d915d805653164cf330b1cb670e820c6f4&w=740" alt="" />
            <h1>Crowd Funding</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
  {/* Conditionally display FaUser icon or profile image */}
  {user ? (
    <>
      {/* Display profile image if user is logged in */}
      <img
        referrerPolicy="no-referrer"
        className="h-8 w-8 rounded-full cursor-pointer"
        src={user.photoURL || "https://via.placeholder.com/150"} // Fallback image if no photoURL is available
        alt="User"
        onClick={() => navigate("/Profile")} // Optional: navigate to a profile page on click
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
      {/* Display Log In button when not logged in */}
      <NavLink to="/LogIn">
        <button className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#00aaff]">
          Log In
        </button>
      </NavLink>
      {/* Display Register button when not logged in */}
      <NavLink to="/Register">
        <button className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#00aaff]">
          Register
        </button>
      </NavLink>
    </>
  )}
</div>

      </div>
    </div>
  );
};

export default Navbar;
