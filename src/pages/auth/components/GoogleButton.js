import styled from "styled-components";
import googleIcon from "../../../assets/google.svg";

const Wrapper = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    border: 0.1rem solid #b6a38b;
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem 6rem;
    margin-top: 2rem;
`;

const Icon = styled.img`
    width: 2.6rem;
    height: 2.6rem;
`;

const Text = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
`;

const GoogleButton = ({ text }) => {
    return (
        <Wrapper>
            <Icon src={googleIcon} alt="Google Icon" />
            <Text>{text}</Text>
        </Wrapper>
    );
};
export default GoogleButton;
