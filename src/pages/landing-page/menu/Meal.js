import styled from "styled-components";
import Button from "../../../design-system/Button/Button";
import Star from "./Star";
import PlusButton from "../../../design-system/PlusButton/PlusButton";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";

const MealCard = styled.div`
    max-width: 70rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3.5rem 3.7rem;
    background-color: #d0ccc733;
    border-radius: 7rem;

    @media (min-width: 800px) {
        width: calc((100% - 8rem) / 2);
    }

    @media (min-width: 1200px) {
        width: calc((100% - 8rem) / 3);
    }
`;

const MealBody = styled.div``;

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
    const windowWidth = useWindowWidth();

    return (
        <MealCard>
            <MealBody>
                <MealImage src={props.img} alt={props.name} />
                <MealName>{props.name}</MealName>
                <MealStarsWrapper>
                    {props.rating.map((number, idx) => {
                        return <Star number={number} key={idx} />;
                    })}
                </MealStarsWrapper>
                <MealDescription>{props.description}</MealDescription>
            </MealBody>
            <MealFooter>
                <MealPrice>{props.price}</MealPrice>
                {windowWidth > 1200 ? (
                    <Button
                        size={window.innerWidth > 1340 ? "md" : "sm"}
                        color="orange"
                    >
                        Order Now
                    </Button>
                ) : (
                    <PlusButton />
                )}
            </MealFooter>
        </MealCard>
    );
};

export default Meal;
