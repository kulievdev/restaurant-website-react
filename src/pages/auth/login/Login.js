import styled from "styled-components";

const LoginInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const InputWrapper = styled.div``;

const LoginLabel = styled.label`
    font-size: 1.4rem;
    line-height: 2rem;
    color: #311f09;
    margin-bottom: 1.6rem;
`;

const LoginInput = styled.input`
    border: none;
    background-color: #d0ccc7;
    border-radius: 1rem;
    opacity: 10%;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #311f09;
`;

const LoginInputs = () => {
    return (
        <LoginInputsWrapper>
            <InputWrapper>
                <LoginLabel></LoginLabel>
                <LoginInput type="text" />
            </InputWrapper>
            <InputWrapper>
                <LoginLabel></LoginLabel>
                <LoginInput type="email" />
            </InputWrapper>
            <InputWrapper>
                <LoginLabel></LoginLabel>
                <LoginInput type="password" />
            </InputWrapper>
        </LoginInputsWrapper>
    );
};

export default LoginInputs;
