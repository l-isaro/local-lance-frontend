import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function GuestLayout() {
  return (
    <div className="bg-background-green mx-28 font-poppins text-web-gray">
        <Navbar />
        <Outlet />
    </div>
  )
}
