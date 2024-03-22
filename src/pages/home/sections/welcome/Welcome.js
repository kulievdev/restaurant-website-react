import saladImage from "../../../../assets/salad.png";
import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionContainer,
    SectionDescription,
    SectionHeading
} from "../../../components/layout";

const WelcomeSection = styled.section`
    background-color: #3fc66e1a;
`;

const WelcomeSectionContainer = styled(SectionContainer)`
    display: flex;
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
                        Welcome to <br />
                        <OrangeSpanText>DeliziOso</OrangeSpanText>
                    </SectionHeading>
                    <SectionDescription $marginBottom="10">
                        Benvenuti! Welcome to{" "}
                        <OrangeSpanText>DeliziOso,</OrangeSpanText> where the
                        aroma of Italy fills the air and every guest is family.
                        Step into our cozy ambiance and prepare to be
                        transported to the heart of Italian culinary tradition.
                        Whether you're a connoisseur or new to Italian cuisine,
                        our warm hospitality and authentic flavors ensure an
                        unforgettable dining experience. Join us as we celebrate
                        the art of food and the joy of gathering around the
                        table.
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
