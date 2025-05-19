import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900">
      <Navbar /> 
      <div className="w-11/12 mx-auto overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;