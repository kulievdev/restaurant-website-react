import { useState } from "react";
import Button from "../../../design-system/Button/Button";
import {
    desserts,
    dinner,
    drinks,
    lunch,
    pizzas,
    primaryMeals,
    secondaryMeals
} from "./data";
import Meal from "./Meal";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { MenuMealsWrapper } from "./Menu";
import styled from "styled-components";

const GeneralMealWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;

    margin-bottom: 10rem;
`;

const General = () => {
    const windowWidth = useWindowWidth();

    const [seeMore, setSeeMore] = useState(false);

    return (
        <>
            <GeneralMealWrapper>
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
            </GeneralMealWrapper>
            <Button
                size={
                    windowWidth > 1620 ? "lg" : windowWidth > 400 ? "md" : "sm"
                }
                color="orange"
                onClick={() => {
                    setSeeMore(!seeMore);
                }}
            >
                {seeMore ? "See less" : "See more"}
            </Button>
        </>
    );
};

const Dinner = () => {
    return (
        <MenuMealsWrapper>
            {dinner.map((meal, idx) => {
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
    );
};

const Lunch = () => {
    return (
        <MenuMealsWrapper>
            {lunch.map((meal, idx) => {
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
    );
};

const Pizzas = () => {
    return (
        <MenuMealsWrapper>
            {pizzas.map((meal, idx) => {
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
    );
};

const Desserts = () => {
    return (
        <MenuMealsWrapper>
            {desserts.map((meal, idx) => {
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
    );
};

const Drinks = () => {
    return (
        <MenuMealsWrapper>
            {drinks.map((meal, idx) => {
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
    );
};
export { General, Dinner, Lunch, Pizzas, Desserts, Drinks };
