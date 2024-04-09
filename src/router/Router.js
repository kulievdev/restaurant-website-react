import { Routes, Route } from "react-router-dom";

import App from "../App";
import Signup from "../pages/auth/signup/Signup";
import Login from "../pages/auth/login/Login";
import ResetPassword from "../pages/auth/reset-password/ResetPassword";
import Home from "../pages/landing-page/Home";
import Menu from "../pages/landing-page/menu/Menu";
import AboutUs from "../pages/about-us/AboutUs";
import Reservation from "../pages/reservation/Reservation";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="contact-us" element={<div>Contact Us</div>} />
            </Route>
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
    );
};

export default Router;
