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
const NavSection = styled.section``;

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

const CloseIconWrapper = styled.div`
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
`;
const Stick = styled.div`
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0.3rem;
        border-radius: 0.4rem;
        background-color: black;
        transition: transform 0.3s ease;
    }

    &::before {
        transform: translateY(-50%) rotate(45deg);
    }

    &::after {
        transform: translateY(-50%) rotate(-45deg);
    }
`;
const CloseIcon = ({ setHamburger }) => {
    return (
        <CloseIconWrapper onClick={setHamburger}>
            <Stick />
            <Stick />
        </CloseIconWrapper>
    );
};

const MobileUnorderedList = styled(UnorderedList)`
    flex-direction: column;
    text-align: center;
`;

const MobileNavLinks = ({ setHamburger }) => {
    return (
        <MobileUnorderedList>
            {links.map((link, idx) => (
                <List key={idx}>
                    <Link
                        to={link.link}
                        className={({ isActive }) => {
                            return isActive ? "active" : null;
                        }}
                        onClick={setHamburger}
                    >
                        {link.text}
                    </Link>
                </List>
            ))}
        </MobileUnorderedList>
    );
};

const MobileNavSectionWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eef9f0;
    z-index: 20;
    position: fixed;
    overflow: auto;
    flex-direction: column;
`;
const MobileNavContainer = styled.div`
    padding: 6.7rem 3rem;

    @media (min-width: 500px) {
        padding: 6.7rem 5rem;
    }

    @media (min-width: 900px) {
        padding: 6.7rem 10rem;
    }
`;
const MobileNavTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
`;

const MobileNavSection = ({ setHamburger }) => {
    return (
        <MobileNavSectionWrapper>
            <MobileNavContainer>
                <MobileNavTop>
                    <Logo type="white" />
                    <NavigationActions>
                        <Cart />
                        <CloseIcon setHamburger={setHamburger} />
                    </NavigationActions>
                </MobileNavTop>
                <MobileNavLinks setHamburger={setHamburger} />
            </MobileNavContainer>
        </MobileNavSectionWrapper>
    );
};

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
        <>
            {isHamburgerOpen && windowWidth < 1350 ? (
                <MobileNavSection setHamburger={toggleHamburger} />
            ) : (
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
                                                return isActive
                                                    ? "active"
                                                    : null;
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
                                <MobileNavCta setHamburger={toggleHamburger} />
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
            )}
        </>
    );
};

export default TopNavigation;
