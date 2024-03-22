import styled from "styled-components";

const SectionHeading = styled.h2`
    font-size: 8rem;
    line-height: 8rem;
    font-weight: 700;
    color: #311f09;

    margin-bottom: ${(props) => `${props.$marginBottom}rem`};
`;

const SectionDescription = styled.h2`
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;
    color: #5c4529;

    margin-bottom: ${(props) => `${props.$marginBottom}rem`};
`;

const OrangeSpanText = styled.span`
    color: #ff8a00;
`;

export { SectionHeading, SectionDescription, OrangeSpanText };
