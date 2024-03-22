import saladImage from "../../../../assets/salad.png";
import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";

const WelcomeSection = styled.section`
    background-color: #3fc66e1a;
`;

const WelcomeSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    padding: 15rem 5rem;
`;

const WelcomeImageWrapper = styled.div`
    width: 50%;
`;

const WelcomeImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WelcomeImage = styled.img`
    width: 100%;
`;

const WelcomeContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const WelcomeHeading = styled.h2`
    font-size: 8rem;
    font-weight: 700;
    line-height: 8rem;
    color: #311f09;
    margin-bottom: 6rem;
`;

const RestaurantName = styled.span`
    color: #ff8a00;
`;

const WelcomeDescription = styled.p`
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;
    margin-bottom: 10rem;
    color: #5c4529;
`;

const Welcome = () => {
    return (
        <WelcomeSection id="welcome-section">
            <WelcomeSectionContainer>
                <WelcomeImageWrapper>
                    <WelcomeImageContainer>
                        <WelcomeImage src={saladImage} alt="Salad Image" />
                    </WelcomeImageContainer>
                </WelcomeImageWrapper>
                <WelcomeContent>
                    <WelcomeHeading>
                        Welcome to <RestaurantName>DeliziOso</RestaurantName>
                    </WelcomeHeading>
                    <WelcomeDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
                    </WelcomeDescription>
                    <Button size="lg" color="orange">
                        See Our Menu
                    </Button>
                </WelcomeContent>
            </WelcomeSectionContainer>
        </WelcomeSection>
    );
};

export default Welcome;
