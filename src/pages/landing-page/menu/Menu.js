import { primaryMeals, secondaryMeals } from "./data";
import Button from "../../../design-system/Button/Button";
import Meal from "./Meal";
import styled from "styled-components";
import { SectionContainer, SectionHeading } from "../../components/layout";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { useState } from "react";

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

const MenuMealsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4rem;

    margin-bottom: 10rem;
`;

const currentCategories = [
    "General",
    "Dinner",
    "Lunch",
    "Pizza",
    "Supper",
    "Dessert",
    "Drink"
];

const Menu = () => {
    const windowWidth = useWindowWidth();
    const [seeMore, setSeeMore] = useState(false);

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
                            color={category === "General" ? "black" : "gray"}
                        >
                            {category}
                        </Button>
                    ))}
                </MenuCategories>
                <MenuMealsWrapper>
                    {primaryMeals.map((meal, idx) => {
                        return (
                            <Meal
                                key={idx}
                                name={meal.name}
                                price={meal.price}
                                description={meal.text}
                                rating={meal.rating}
                                img={meal.img}
                            />
                        );
                    })}
                    {seeMore &&
                        secondaryMeals.map((meal, idx) => {
                            return (
                                <Meal
                                    key={idx}
                                    name={meal.name}
                                    price={meal.price}
                                    description={meal.text}
                                    rating={meal.rating}
                                    img={meal.img}
                                />
                            );
                        })}
                </MenuMealsWrapper>
                <Button
                    size={
                        windowWidth > 1620
                            ? "lg"
                            : windowWidth > 400
                            ? "md"
                            : "sm"
                    }
                    color="orange"
                    onClick={() => {
                        setSeeMore(!seeMore);
                    }}
                >
                    {seeMore ? "See less" : "See more"}
                </Button>
            </MenuSectionContainer>
        </MenuSection>
    );
};

export default Menu;
