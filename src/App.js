import Footer from "./pages/landing-page/footer/Footer";
import Note from "./pages/landing-page/note/Note";
import TopNavigation from "./pages/landing-page/top-navigation/TopNavigation";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <Note />
            <TopNavigation />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
