import styled from "styled-components";

const SectionHeading = styled.h2`
    font-size: 4rem;
    line-height: 4.3rem;
    font-weight: 600;
    color: #311f09;
    margin-bottom: ${(props) => `${props.$marginBottom}rem`};

    @media (min-width: 375px) {
        font-size: 5rem;
        line-height: 5rem;
        font-weight: 600;
    }

    @media (min-width: 450px) {
        font-size: 6rem;
        line-height: 6rem;
    }

    @media (min-width: 960px) {
        font-size: 6rem;
        line-height: 7rem;
    }

    @media (min-width: 1240px) {
        font-size: 8rem;
        line-height: 8rem;
        font-weight: 700;
    }
`;

const SectionDescription = styled.p`
    font-size: 1.7rem;
    line-height: 3rem;
    font-weight: 400;
    color: #5c4529;
    margin-bottom: ${(props) => `${props.$marginBottom}rem`};

    @media (min-width: 450px) {
        font-size: 1.8rem;
    }

    @media (min-width: 960px) {
        line-height: 3.7rem;
    }

    @media (min-width: 1240px) {
        font-size: 2rem;
        line-height: 4rem;
    }
`;

const OrangeSpanText = styled.span`
    color: #ff8a00;
`;

const SectionContainer = styled.div`
    margin: 0 auto;
    padding: 15rem 3rem;

    @media (min-width: 500px) {
        padding: 15rem 5rem;
    }

    @media (min-width: 900px) {
        padding: 15rem 10rem;
    }

    @media (min-width: 1440px) {
        padding: 15rem 15rem;
    }

    @media (min-width: 1920px) {
        padding: 15rem 20rem;
    }
`;

export { SectionContainer, SectionHeading, SectionDescription, OrangeSpanText };
