import styled from "styled-components";
import Button from "../../../../design-system/Button/Button";
import Star from "./Star";

const MealCard = styled.div`
    width: calc((100% - 8rem) / 3);

    padding: 3.5rem 3.7rem;
    background-color: #d0ccc733;
    border-radius: 7rem;
`;

const MealImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2.4rem;
`;

const MealName = styled.h3`
    font-size: 3rem;
    line-height: 6rem;
    font-weight: 600;
    text-align: center;

    margin-bottom: 0.5rem;
`;

const MealStarsWrapper = styled.div`
    margin-bottom: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    width: max-content;
`;

const MealDescription = styled.p`
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: #59442b;
    text-align: center;
    margin-bottom: 3rem;
`;

const MealFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MealPrice = styled.span`
    font-size: 2.5rem;
    line-height: 3.8rem;
    color: #311f09;
    font-weight: 600;
`;

const Meal = (props) => {
    return (
        <MealCard>
            <MealImage src={props.img} alt={props.name} />
            <MealName>{props.name}</MealName>
            <MealStarsWrapper>
                {props.rating.map((number, idx) => {
                    return <Star number={number} key={idx} />;
                })}
            </MealStarsWrapper>
            <MealDescription>{props.description}</MealDescription>
            <MealFooter>
                <MealPrice>{props.price}</MealPrice>
                <Button size="md" color="orange">
                    Order Now
                </Button>
            </MealFooter>
        </MealCard>
    );
};

export default Meal;
