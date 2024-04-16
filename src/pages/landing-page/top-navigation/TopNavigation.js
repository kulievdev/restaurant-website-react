import Button from "../../../design-system/Button/Button";
import React, { useState } from "react";
import Logo from "../../../design-system/Logo/Logo";
import styled from "styled-components";
import Cart from "../../../design-system/Cart/Cart";
import { SectionContainer } from "../../components/layout";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import MobileNavCta from "../../../design-system/MobileNavCta/MobileNavCta";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";

const links = [
    { text: "Home", link: "/" },
    { text: "Menu", link: "menu" },
    { text: "About Us", link: "about-us" },
    { text: "Reservation", link: "reservation" },
    { text: "Contact Us", link: "contact-us" }
];
const NavSection = styled.section`
    background-image: "../../";
`;

const Header = styled(SectionContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6.7rem;
    padding-top: 0;
    padding-bottom: 0;
`;

const Navigation = styled.nav`
    display: none;

    @media (min-width: 1350px) {
        display: flex;
    }
`;

const UnorderedList = styled.ul`
    display: flex;
    gap: 4.5rem;
    font-size: 1.6rem;
`;

const List = styled.li``;

const Link = styled(NavLink)`
    color: #311f09;

    &.active {
        color: #ff8a00;
    }

    &:hover {
        color: #ff8a00;
    }
`;

const NavigationActions = styled.div`
    position: relative;
    display: flex;
    gap: 2.5rem;
    align-items: center;
`;

const TopNavigation = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const handleOptionsOnClick = (e) => {
        e.preventDefault();

        setOpenOptions(!openOptions);
    };

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    const windowWidth = useWindowWidth();

    return (
        <NavSection>
            <Header as="header">
                <Logo type="white" />
                <Navigation>
                    <UnorderedList>
                        {links.map((link, idx) => (
                            <List key={idx}>
                                <Link
                                    to={link.link}
                                    className={({ isActive }) => {
                                        return isActive ? "active" : null;
                                    }}
                                    onClick={toggleHamburger}
                                >
                                    {link.text}
                                </Link>
                            </List>
                        ))}
                    </UnorderedList>
                </Navigation>
                <NavigationActions>
                    <Cart />
                    {windowWidth < 1350 ? (
                        <MobileNavCta />
                    ) : (
                        <Button
                            onClick={handleOptionsOnClick}
                            size="md"
                            color="green"
                        >
                            Options
                        </Button>
                    )}
                    {openOptions && <Dropdown />}
                </NavigationActions>
            </Header>
        </NavSection>
    );
};

export default TopNavigation;
