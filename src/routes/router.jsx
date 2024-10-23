import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Route>
))

export default router