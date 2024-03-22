import meals from "./data";
import Button from "../../../../design-system/Button/Button";
import Meal from "./Meal";
import styled from "styled-components";

const MenuSection = styled.section``;

const MenuSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const MenuHeading = styled.h2`
    text-align: center;
    font-size: 6rem;
    line-height: 7rem;
    color: #311f09;
    margin-bottom: 5rem;
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

const Menu = () => {
    return (
        <MenuSection id="menu-section">
            <MenuSectionContainer>
                <MenuHeading>Our Popular Menu</MenuHeading>
                <MenuCategories className="menu-section__filters">
                    <Button size="lg" color="black">
                        All Catagories
                    </Button>
                    <Button size="lg" color="gray">
                        Dinner
                    </Button>
                    <Button size="lg" color="gray">
                        Lunch
                    </Button>
                    <Button size="lg" color="gray">
                        Dessert
                    </Button>
                    <Button size="lg" color="gray">
                        Drink
                    </Button>
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
