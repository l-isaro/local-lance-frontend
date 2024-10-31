import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GuestLayout() {
  return (
    <div className=" font-poppins text-web-gray">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
