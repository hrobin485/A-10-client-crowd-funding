import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 w-11/12 mx-auto">
      <Navbar /> 
      <div className=" overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;