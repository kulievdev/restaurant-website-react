import BusinessHours from "./business-hours/BusinessHours";
import Chefs from "./chefs/Chefs";
import Hero from "./hero/Hero";
import Menu from "./menu/Menu";
import Reservation from "./reservation/Reservation";
import Testimonials from "./testimonials/Testimonials";
import Welcome from "./welcome/Welcome";

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <Menu />
            <Reservation />
            <Chefs />
            <Testimonials />
            <BusinessHours />
        </>
    );
};

export default Home;
