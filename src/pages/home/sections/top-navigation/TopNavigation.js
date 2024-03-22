import Button from "../../../../design-system/Button/Button";
import React, { useState } from "react";
import Logo from "../../../../design-system/Logo/Logo";
import styled from "styled-components";
import Cart from "../../../../design-system/Cart/Cart";

const links = [
    { text: "Home", link: "" },
    { text: "Menu", link: "" },
    { text: "About us", link: "" },
    { text: "Reservation", link: "" },
    { text: "Contact Us", link: "" }
];

const Header = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6.7rem;
    padding: 0 5rem;
`;

const Navigation = styled.nav``;

const UnorderedList = styled.ul`
    display: flex;
    gap: 4.5rem;
    font-size: 2rem;
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
    align-items: center;
`;

const TopNavigation = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <Header>
            <Logo />
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
                <Button size="md" color="green">
                    Log In
                </Button>
            </NavigationActions>
        </Header>
    );
};

export { TopNavigation };
