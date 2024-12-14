import { FaUser } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation

const Navbar = () => {
  const location = useLocation(); // Get the current location (route)

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/DonationCampaigns">Donation Campaigns</NavLink></li>
      <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/HowToHelp">How to Help</NavLink></li>
    </>
  );

  // Conditionally set navbar background color, text color, and rounded class based on the route
  const navbarBgColor = location.pathname === '/' ? 'bg-blue-600 text-white rounded-t-xl' : 'bg-white text-black';

  return (
    <div>
      <div className={`navbar ${navbarBgColor}`}> {/* Apply the bg color, text color, and rounded class dynamically */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className='flex gap-2 items-center'>
          <img className='h-1/6 w-2/12 rounded-lg' src="https://media.istockphoto.com/id/1732008587/vector/winter-clothes-donation-vector-illustration-in-flat-style.jpg?s=612x612&w=0&k=20&c=X9Q0U1cU0CVCgk3Hxb5HTiLcZJShgTMrkts7ixwV4hk=" alt="" />
          <h1>Winter Clothing Donation</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
         <h2><FaUser /></h2>
          <button className="">
              Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
