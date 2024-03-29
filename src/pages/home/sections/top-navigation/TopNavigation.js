import Button from "../../../../design-system/Button/Button";
import React, { useState } from "react";
import Logo from "../../../../design-system/Logo/Logo";
import styled from "styled-components";
import Cart from "../../../../design-system/Cart/Cart";
import { SectionContainer } from "../../../components/layout";
import useWindowWidth from "../../../../custom-hooks/useWindowWidth";
import MobileNavCta from "../../../../design-system/MobileNavCta/MobileNavCta";

const links = [
    { text: "Home", link: "" },
    { text: "Menu", link: "" },
    { text: "About us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" }
];

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

const Link = styled.a`
    color: #311f09;

    ${List}:first-child & {
        color: orange;
    }
`;

const NavigationActions = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;
`;

const TopNavigation = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    const windowWidth = useWindowWidth();

    return (
        <Header as="header">
            <Logo type="white" />
            <Navigation>
                <UnorderedList>
                    {links.map((link, idx) => (
                        <List key={idx}>
                            <Link href={link.link} onClick={toggleHamburger}>
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
                    <Button size="md" color="green">
                        Log In
                    </Button>
                )}
            </NavigationActions>
        </Header>
    );
};

export default TopNavigation;
