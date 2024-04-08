import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "../App";
import Signup from "../pages/auth/signup/Signup";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<div>Test</div>} />
        </>
    )
);
