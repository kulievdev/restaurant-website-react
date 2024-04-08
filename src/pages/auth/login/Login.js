import styled from "styled-components";
import loginImg from "../../../assets/login.png";
import Auth from "../components/Auth";
import {
    CheckBoxInput,
    CheckBoxWrapper,
    Form,
    Header,
    QuestionText,
    RememberMeText,
    RememberMeWrapper,
    SpanText,
    TextWrapper
} from "../components/reusables";
import Button from "../../../design-system/Button/Button";
import GoogleButton from "../components/GoogleButton";

const LoginInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;
`;

const LoginInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginLabel = styled.label`
    font-size: 1.4rem;
    line-height: 2rem;
    color: #311f09;
    margin-bottom: 1.6rem;
`;

const LoginInput = styled.input`
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 3rem;
    color: #5c4529;
    font-size: 1.6rem;
    outline-color: #ff8a00;
`;

const ForgotPasswordText = styled(RememberMeText)`
    cursor: pointer;
`;

const LoginForm = () => {
    return (
        <Form>
            <Header>Login</Header>
            <TextWrapper>
                <QuestionText>Don't have an account?</QuestionText>
                <SpanText>Sign Up</SpanText>
            </TextWrapper>
            <LoginInputsWrapper>
                <LoginInputWrapper>
                    <LoginLabel>Email address</LoginLabel>
                    <LoginInput type="text" />
                </LoginInputWrapper>
                <LoginInputWrapper>
                    <LoginLabel>Password</LoginLabel>
                    <LoginInput type="password" />
                </LoginInputWrapper>
            </LoginInputsWrapper>
            <RememberMeWrapper>
                <CheckBoxWrapper>
                    <CheckBoxInput type="checkbox" />
                    <RememberMeText>Remember me</RememberMeText>
                </CheckBoxWrapper>
                <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
            </RememberMeWrapper>
            <Button size="xl" color="orange">
                Continue
            </Button>
            <GoogleButton text="Login with google" />
        </Form>
    );
};

const Login = () => {
    return (
        <Auth imageSrc={loginImg}>
            <LoginForm />
        </Auth>
    );
};

export default Login;
