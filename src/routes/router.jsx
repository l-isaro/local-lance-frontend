import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateProject from "../pages/CreateProject";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="project/:id" element={<ProjectDetails />}></Route>
        <Route/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/create" element={<CreateProject />} />
    </Route>
))

export default router