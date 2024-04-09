import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "../App";
import Signup from "../pages/auth/signup/Signup";
import Login from "../pages/auth/login/Login";
import ResetPassword from "../pages/auth/reset-password/ResetPassword";
import Home from "../pages/landing-page/Home";
import Menu from "../pages/landing-page/menu/Menu";
import AboutUs from "../pages/about-us/AboutUs";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="reservation" element={<div>Reservation</div>} />
                <Route path="contact-us" element={<div>Contact Us</div>} />
            </Route>
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
        </>
    )
);
