import "./MobileNavCta.css";

const MobileNavCta = ({ setHamburger }) => {
    return (
        <div onClick={setHamburger} className="mobile_nav_cta_wrapper">
            <div className="mobile_nav_black"></div>
            <div className="mobile_nav_black"></div>
            <div className="mobile_nav_black"></div>
            <div className="mobile_nav_orange"></div>
        </div>
    );
};

export default MobileNavCta;
