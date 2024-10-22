import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />}/>
    </Route>
))

export default router