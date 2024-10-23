import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function GuestLayout() {
  return (
    <div className=" font-poppins text-web-gray">
        <Navbar />
        <Outlet />
    </div>
  )
}
