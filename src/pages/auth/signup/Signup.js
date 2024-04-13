import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../design-system/Modal/Modal";
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
import Terms from "./Terms";
import Input from "../../../design-system/Input/Input";

const SignupInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;
`;

const SignupForm = () => {
    const navigate = useNavigate();
    const [termOpen, setTermOpen] = useState(false);

    const handleTermsOnclick = () => {
        setTermOpen(true);
    };

    const closeModal = () => {
        setTermOpen(false);
    };

    return (
        <>
            <Form>
                <Header>Sign Up</Header>
                <TextWrapper>
                    <QuestionText>Have an account?</QuestionText>
                    <SpanText
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                    >
                        Login
                    </SpanText>
                </TextWrapper>
                <SignupInputsWrapper>
                    <Input type="text" placeholder="Full name" />
                    <Input type="email" placeholder="Email address" />
                    <Input type="password" placeholder="Password" />
                </SignupInputsWrapper>
                <RememberMeWrapper>
                    <CheckBoxWrapper>
                        <CheckBoxInput type="checkbox" />
                        <RememberMeText>
                            Accept{" "}
                            <SpanText onClick={handleTermsOnclick}>
                                Terms & Conditions
                            </SpanText>
                        </RememberMeText>
                    </CheckBoxWrapper>
                </RememberMeWrapper>
                <Button size="xl" color="orange" width="full">
                    Create account
                </Button>
                <GoogleButton text="Sign up with google" />
            </Form>
            {termOpen && (
                <Modal show={termOpen} onClose={closeModal}>
                    <Terms closeModal={closeModal} />
                </Modal>
            )}
        </>
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
