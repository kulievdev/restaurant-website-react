import styled from "styled-components";
import Auth from "../components/Auth";
import signupImg from "../../../assets/signup.png";
import Button from "../../../design-system/Button/Button";
import GoogleButton from "../components/GoogleButton";
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

const SignupInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;
`;

const SignupInput = styled.input`
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 3rem;
    outline-color: #ff8a00;
    color: #5c4529;
    font-size: 1.6rem;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #a0978c;
    }
`;

const SignupForm = () => {
    return (
        <Form>
            <Header>Sign Up</Header>
            <TextWrapper>
                <QuestionText>Have an account?</QuestionText>
                <SpanText>Login</SpanText>
            </TextWrapper>
            <SignupInputsWrapper>
                <SignupInput type="text" placeholder="Full name" />
                <SignupInput type="email" placeholder="Email address" />
                <SignupInput type="password" placeholder="Password" />
            </SignupInputsWrapper>
            <RememberMeWrapper>
                <CheckBoxWrapper>
                    <CheckBoxInput type="checkbox" />
                    <RememberMeText>
                        Accept <SpanText>Terms & Conditions</SpanText>
                    </RememberMeText>
                </CheckBoxWrapper>
            </RememberMeWrapper>
            <Button size="xl" color="orange">
                Create account
            </Button>
            <GoogleButton text="Sign up with google" />
        </Form>
    );
};

const Signup = () => {
    return (
        <Auth imageSrc={signupImg}>
            <SignupForm />
        </Auth>
    );
};

export default Signup;
