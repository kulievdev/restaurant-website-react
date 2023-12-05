import "./Footer.css";
import logo from "../../../../assets/logo-dark.svg";
import twitterImg from "../../../../assets/twitter.svg";
import instagramImg from "../../../../assets/instagram.svg";
import facebookImg from "../../../../assets/facebook.svg";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img src={logo} alt="" className="footer__logo" />
                        <p className="footer__text">
                            Viverra gravida morbi egestas facilisis tortor netus
                            non duis tempor.
                        </p>
                        <div className="footer__social-icons">
                            <img src={twitterImg} alt="Twitter" />
                            <img src={instagramImg} alt="Instagram" />
                            <img src={facebookImg} alt="Facebook" />
                        </div>
                    </div>
                    <div className="footer__pages">
                        <h4 className="footer__heading">Page</h4>
                        <a href="" className="footer__text">
                            Home
                        </a>
                        <a href="" className="footer__text">
                            Menu
                        </a>
                        <a href="" className="footer__text">
                            Order Online
                        </a>
                        <a href="" className="footer__text">
                            Catering
                        </a>
                        <a href="" className="footer__text">
                            Reservation
                        </a>
                    </div>
                    <div className="footer__about">
                        <h4 className="footer__heading">Information</h4>
                        <a href="" className="footer__text">
                            About us
                        </a>
                        <a href="" className="footer__text">
                            Testimonial
                        </a>
                        <a href="" className="footer__text">
                            Event
                        </a>
                    </div>
                    <div className="footer__contact">
                        <h4 className="footer__heading">Get In Touch</h4>
                        <p className="footer__text">
                            3247 Johnson Ave, <br />
                            Bronx, NY 10463
                        </p>
                        <a
                            href="mailto: delizioso@gmail.com"
                            className="footer__text"
                        >
                            delizioso@gmail.com
                        </a>
                        <a href="tel:347-567-2828" className="footer__text">
                            347-567-2828
                        </a>
                    </div>
                </div>
                <p className="footer__text text-center">
                    Copyright &copy; 2023 Delizioso
                </p>
            </div>
        </footer>
    );
};

export { Footer };
