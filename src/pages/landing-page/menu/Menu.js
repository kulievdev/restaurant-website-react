import Button from "../../../design-system/Button/Button";
import styled from "styled-components";
import { SectionContainer, SectionHeading } from "../../components/layout";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { useState } from "react";
import { Desserts, Dinner, Drinks, General, Lunch, Pizzas } from "./Categories";

const MenuSection = styled.section`
    text-align: center;
`;

const MenuSectionContainer = styled(SectionContainer)``;

const MenuCategories = styled.div`
    display: flex;
    flex-direction: column;
    color: #311f09;

    gap: 4rem;
    margin-bottom: 6rem;

    @media (min-width: 460px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1050px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1920px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 4rem;
    }
`;

export const MenuMealsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`;

const currentCategories = [
    { text: "General", link: "" },
    { text: "Lunch", link: "lunch" },
    { text: "Dinner", link: "dinner" },
    { text: "Pizzas", link: "pizzas" },
    { text: "Desserts", link: "desserts" },
    { text: "Drinks", link: "drinks" }
];

const Menu = () => {
    const windowWidth = useWindowWidth();
    const [active, setActive] = useState("General");

    return (
        <MenuSection id="menu-section">
            <MenuSectionContainer>
                <SectionHeading $marginBottom="6">
                    Our Popular Menu
                </SectionHeading>
                <MenuCategories className="menu-section__filters">
                    {currentCategories.map((category, idx) => (
                        <Button
                            key={idx}
                            size={windowWidth > 1620 ? "lg" : "md"}
                            color={category.text === active ? "black" : "gray"}
                            width="full"
                            onClick={() => setActive(category.text)}
                        >
                            {category.text}
                        </Button>
                    ))}
                </MenuCategories>
                {active === "General" && <General />}
                {active === "Dinner" && <Dinner />}
                {active === "Lunch" && <Lunch />}
                {active === "Pizzas" && <Pizzas />}
                {active === "Desserts" && <Desserts />}
                {active === "Drinks" && <Drinks />}
            </MenuSectionContainer>
        </MenuSection>
    );
};

export default Menu;
