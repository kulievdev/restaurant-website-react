import styled from "styled-components";

const ChefWrapper = styled.div`
    width: 100%;
    background-color: rebeccapurple;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
        width: calc((100% - 8rem) / 2);
    }

    @media (min-width: 1000px) {
        width: calc((100% - 8rem) / 3);
    }
`;

const ChefImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5rem;
    margin-bottom: 4rem;
    background-color: ${(props) => props.$backgroundColor};
`;

const ChefName = styled.h4`
    color: #311f09;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 5rem;
    background-color: aqua;
`;

const ChefTitle = styled.p`
    color: #a08d76;
    font-size: 2.5rem;
    line-height: 5rem;
    font-weight: 400;
    background-color: yellow;
`;

const Chef = (props) => {
    return (
        <ChefWrapper>
            <ChefImage
                src={props.img}
                alt={props.alt}
                $backgroundColor={props.backgroundColor}
            />
            <ChefName>{props.name}</ChefName>
            <ChefTitle>{props.title}</ChefTitle>
        </ChefWrapper>
    );
};

export default Chef;
