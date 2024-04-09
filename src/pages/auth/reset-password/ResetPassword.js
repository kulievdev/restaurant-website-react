import styled from "styled-components";
import Button from "../../../design-system/Button/Button";
import { SpanText } from "../components/reusables";
import resetPasswordImg from "../../../assets/reset.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    max-width: 60rem;
    text-align: center;
    padding: 6rem 8rem;
    background-color: #fff;
    box-shadow: 0 2.5rem 5rem -1.2rem rgb(0 0 0 / 0.25);
`;

const Img = styled.img`
    width: 30rem;
    height: 30rem;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: #5c4529;
`;

const Text = styled.p`
    font-size: 1.6rem;
    margin-bottom: 5rem;
    color: #5c4529;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 2rem;
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 3rem;
    outline-color: #3fa72f;
    color: #5c4529;
    font-size: 1.6rem;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #a0978c;
    }
`;

const ReturnText = styled(SpanText)`
    margin-top: 2rem;
`;

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Img src={resetPasswordImg} alt="Forgot Password Image"></Img>
                <Title>Reset your password</Title>
                <Text>Enter the email address you used to register with.</Text>
                <Input type="email" placeholder="Enter email address" />
                <Button color="green" size="xl">
                    Get Instructions
                </Button>
                <ReturnText
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Return to sign in
                </ReturnText>
            </Container>
        </Wrapper>
    );
};

export default ResetPassword;
