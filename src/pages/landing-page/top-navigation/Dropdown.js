import styled from "styled-components";
import Button from "../../../design-system/Button/Button";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 6.9rem;
    width: 20rem;
    padding: 1.5rem;
    border-radius: 0.8rem;
    background-color: #fff;
    border: 0.1rem solid #ff8a00;

    &::before {
        content: "";
        position: absolute;
        top: -1.08rem;
        right: 2rem;
        width: 2rem;
        height: 2rem;
        transform: rotate(45deg);
        background-color: #fff;
        border-left: 0.1rem solid #ff8a00;
        border-top: 0.1rem solid #ff8a00;
    }
`;

const Dropdown = () => {
    return (
        <Wrapper>
            <Button size="md" color="orange">
                Sign Up
            </Button>
            <Button size="md" color="green">
                Login
            </Button>
        </Wrapper>
    );
};

export default Dropdown;
