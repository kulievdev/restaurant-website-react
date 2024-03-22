import saladImage from "../../../../assets/salad.png";
import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionDescription,
    SectionHeading
} from "../../../components/layout";

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
                    <SectionHeading $marginBottom="6">
                        Welcome to <OrangeSpanText>DeliziOso</OrangeSpanText>
                    </SectionHeading>
                    <SectionDescription $marginBottom="10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
                    </SectionDescription>
                    <Button size="lg" color="orange">
                        See Our Menu
                    </Button>
                </WelcomeContent>
            </WelcomeSectionContainer>
        </WelcomeSection>
    );
};

export default Welcome;
