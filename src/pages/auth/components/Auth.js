import styled from "styled-components";

const AuthWrapper = styled.section`
    display: flex;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
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
