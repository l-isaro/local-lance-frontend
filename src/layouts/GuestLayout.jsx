import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoggedNavbar from "../components/LoggedNavbar";
import { useAuth } from "../contexts/AuthContext";

export default function GuestLayout() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn());
  return (
    <div className=" font-poppins text-web-gray">
      {isLoggedIn() ? <LoggedNavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}
