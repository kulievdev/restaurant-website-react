import styled from "styled-components";

const AuthWrapper = styled.section`
    display: flex;
    flex-direction: column;

    @media (min-width: 1060px) {
        flex-direction: row;
        height: 100vh;
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 0rem;

    @media (min-width: 625px) {
        padding: 10rem 10rem;
    }

    @media (min-width: 830px) {
        padding: 10rem 20rem;
    }

    @media (min-width: 1060px) {
        width: 40%;
        padding: 0;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1060px) {
        width: 60%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Auth = ({ children, imageSrc }) => {
    return (
        <AuthWrapper>
            <ContentWrapper>{children}</ContentWrapper>
            <ImageWrapper>
                <Image src={imageSrc} alt="Food Image" />
            </ImageWrapper>
        </AuthWrapper>
    );
};

export default Auth;
