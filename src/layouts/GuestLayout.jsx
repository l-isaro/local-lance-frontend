import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function GuestLayout() {
  return (
    <div className="bg-background-green">
        <Navbar />
        <Outlet />
    </div>
  )
}
