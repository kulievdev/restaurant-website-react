import styled from "styled-components";

const SectionHeading = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 700;
    color: #311f09;

    margin-bottom: ${(props) => `${props.$marginBottom}rem`};
`;

const SectionDescription = styled.p`
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;
    color: #5c4529;

    margin-bottom: ${(props) => `${props.$marginBottom}rem`};
`;

const OrangeSpanText = styled.span`
    color: #ff8a00;
`;

const SectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;

    @media (min-width: 1440px) {
        max-width: 192rem;
    }
`;

export { SectionContainer, SectionHeading, SectionDescription, OrangeSpanText };
