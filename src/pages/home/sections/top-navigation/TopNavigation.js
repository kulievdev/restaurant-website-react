import "./TopNavigation.css";
import cartIcon from "../../../../assets/cart.svg";
import logo from "../../../../assets/logo-white.svg";

const links = [
    { text: "Home", link: "https://google.com" },
    { text: "Menu", link: "https://facebook.com" },
    { text: "About us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "./contact.html" }
];

const TopNavigation = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <img src={logo} alt="DeliziOso" className="logo-white" />
                <ul className="navigation__links">
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="navigation__actions">
                    <figure>
                        <img src={cartIcon} alt="Shopping Cart" />
                    </figure>
                    <button className="btn btn-sm btn-green">Log In</button>
                </div>
            </nav>
        </header>
    );
};

export { TopNavigation };
