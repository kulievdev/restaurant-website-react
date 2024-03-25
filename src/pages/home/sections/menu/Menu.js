import meals from "./data";
import Button from "../../../../design-system/Button/Button";
import Meal from "./Meal";
import styled from "styled-components";
import { SectionContainer, SectionHeading } from "../../../components/layout";
import useWindowWidth from "../../../../custom-hooks/useWindowWidth";

const MenuSection = styled.section`
    text-align: center;
`;

const MenuSectionContainer = styled(SectionContainer)``;

const MenuCategories = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4rem;
    margin-bottom: 6rem;

    @media (min-width: 460px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 940px) {
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
`;

const currentCategories = [
    "All Catagories",
    "Dinner",
    "Lunch",
    "Supper",
    "Dessert",
    "Drink"
];

const Menu = () => {
    const windowWidth = useWindowWidth();

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
                            size={windowWidth > 650 ? "lg" : "md"}
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
