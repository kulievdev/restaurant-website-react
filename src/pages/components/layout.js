import styled from "styled-components";

const SectionHeading = styled.h2`
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
    color: #311f09;
    margin-bottom: ${(props) => `${props.$marginBottom}rem`};

    @media (min-width: 1240px) {
        font-size: 8rem;
        line-height: 8rem;
        font-weight: 700;
    }

    @media (min-width: 960px) {
        font-size: 6rem;
        line-height: 7rem;
        font-weight: 600;
    }

    @media (min-width: 450px) {
        font-size: 6rem;
        line-height: 6rem;
        font-weight: 600;
    }
`;

const SectionDescription = styled.p`
    font-size: 1.7rem;
    line-height: 3rem;
    font-weight: 400;
    color: #5c4529;
    margin-bottom: ${(props) => `${props.$marginBottom}rem`};

    @media (min-width: 1240px) {
        font-size: 2rem;
        line-height: 4rem;
    }

    @media (min-width: 960px) {
        line-height: 3.7rem;
    }

    @media (min-width: 450px) {
        font-size: 1.8rem;
    }
`;

const OrangeSpanText = styled.span`
    color: #ff8a00;
`;

const SectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 3rem;

    @media (min-width: 1440px) {
        max-width: 192rem;
    }

    @media (min-width: 500px) {
        max-width: 144rem;
        padding: 15rem 5rem;
    }
`;

export { SectionContainer, SectionHeading, SectionDescription, OrangeSpanText };
