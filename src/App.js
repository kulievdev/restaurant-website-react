import Footer from "./pages/landing-page/footer/Footer";
import TopNavigation from "./pages/landing-page/top-navigation/TopNavigation";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <TopNavigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
