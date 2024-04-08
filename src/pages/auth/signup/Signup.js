import styled from "styled-components";
import Auth from "../components/Auth";
import signupImg from "../../../assets/signup.png";

const Form = styled.form`
    width: 100%;
    padding: 0 11rem;
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
    padding: 2.6rem 0 2.6rem 4rem;
    outline-color: #ff8a00;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #a0978c;
    }
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
    border-radius: 50%;
    background-color: #dcd4cb;
`;

const RememberMeText = styled.p`
    font-size: 1.6rem;
    line-height: 4rem;
    color: #5c4529;
`;

const SignupForm = () => {
    return (
        <Form>
            <Header>Sign up</Header>
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
