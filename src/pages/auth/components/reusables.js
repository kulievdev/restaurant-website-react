import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    padding: 0 4rem;

    @media (min-width: 1440px) {
        padding: 0 8rem;
    }

    @media (min-width: 1920px) {
        padding: 0 12rem;
    }
`;

const Header = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.7rem;
    margin-bottom: 1.8rem;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 6rem;
`;

const QuestionText = styled.p`
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: #5c4529;
`;

const SpanText = styled.span`
    font-size: 1.6rem;
    color: #0094ff;
    cursor: pointer;
`;

const RememberMeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 4rem;
`;

const CheckBoxInput = styled.input`
    width: 2rem;
    height: 2rem;
`;

const RememberMeText = styled.p`
    font-size: 1.6rem;
    line-height: 4rem;
    color: #5c4529;
`;

export {
    Form,
    Header,
    TextWrapper,
    QuestionText,
    SpanText,
    RememberMeWrapper,
    CheckBoxWrapper,
    CheckBoxInput,
    RememberMeText
};
