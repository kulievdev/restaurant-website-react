import "./TopNavigation.css";
import cartIcon from "../../../../assets/cart.svg";
import logo from "../../../../assets/logo-white.svg";
import Button from "../../../../design-system/Button/Button";
import React, { useState } from "react";

const links = [
    { text: "Home", link: "" },
    { text: "Menu", link: "" },
    { text: "About us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" }
];

const TopNavigation = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <header className={`header ${isHamburgerOpen ? "open" : ""}`}>
            <nav className="navigation">
                <img src={logo} alt="DeliziOso" className="logo-white" />
                <div
                    className={`hamburger ${isHamburgerOpen ? "open" : ""}`}
                    onClick={toggleHamburger}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul
                    className={`navigation__links ${
                        isHamburgerOpen ? "open" : ""
                    }`}
                >
                    {links.map((link, idx) => (
                        <li key={idx}>
                            <a href={link.link} onClick={toggleHamburger}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cartIcon} alt="Shopping Cart" />
                    </figure>
                    <Button size="sm" color="green">
                        Log In
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
