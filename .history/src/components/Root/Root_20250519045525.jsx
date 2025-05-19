import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";


const Root = () => {
    return (
    <div className="bg-slate-50 dark:bg-gray-900">
        <div className="w-11/12  mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;