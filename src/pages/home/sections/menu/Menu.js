import meals from "./data";
import Button from "../../../../design-system/Button/Button";
import Meal from "./Meal";
import styled from "styled-components";
import { SectionHeading } from "../../../components/layout";

const MenuSection = styled.section`
    text-align: center;
`;

const MenuSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const MenuCategories = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
`;

const MenuMealsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`;

const currentCategories = [
    "All Catagories",
    "Dinner",
    "Lunch",
    "Dessert",
    "Drink"
];

const Menu = () => {
    return (
        <MenuSection id="menu-section">
            <MenuSectionContainer>
                <SectionHeading $marginBottom="5">
                    Our Popular Menu
                </SectionHeading>
                <MenuCategories className="menu-section__filters">
                    {currentCategories.map((category, idx) => (
                        <Button
                            key={idx}
                            size="lg"
                            color={
                                category === "All Catagories" ? "black" : "gray"
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </MenuCategories>
                <MenuMealsWrapper>
                    {meals.map((meal, idx) => {
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
            </MenuSectionContainer>
        </MenuSection>
    );
};

export default Menu;
