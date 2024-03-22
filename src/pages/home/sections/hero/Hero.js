import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import spaghettiImage from "../../../../assets/menu-spaghetti.png";
import {
    SectionHeading,
    SectionDescription,
    SectionContainer,
    OrangeSpanText
} from "../../../components/layout";

const HeroSection = styled.section``;

const HeroSectionContainer = styled(SectionContainer)`
    display: flex;
`;

const HeroContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RestaurantName = styled.span`
    display: block;
    width: max-content;
    margin-bottom: 2.4rem;
    background-color: #ffe8cc;
    color: #ff8a00;
    font-size: 1.8rem;
    border-radius: 12rem;
    padding: 1rem 3rem;
`;

const HeroCtaWrapper = styled.div`
    display: flex;
    gap: 2.3rem;
`;

const HeroImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroImage = styled.img`
    width: 100%;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroContent>
                    <RestaurantName>DeliziOso</RestaurantName>
                    <SectionHeading $marginBottom="2.2">
                        Italian <br />
                        Cuisine
                    </SectionHeading>
                    <SectionDescription $marginBottom="8.4">
                        Experience the Essence of Italy at{" "}
                        <OrangeSpanText>DeliziOso,</OrangeSpanText> where each
                        dish embodies the rich flavors and traditions of Italian
                        cuisine. From handmade pastas to mouthwatering pizzas
                        and decadent desserts, our menu promises a culinary
                        journey through Italy's finest. Buon Appetito!
                    </SectionDescription>
                    <HeroCtaWrapper>
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="green">
                            Reservation
                        </Button>
                    </HeroCtaWrapper>
                </HeroContent>
                <HeroImageWrapper>
                    <HeroImageContainer>
                        <HeroImage src={spaghettiImage} alt="Spaghetti Image" />
                    </HeroImageContainer>
                </HeroImageWrapper>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export default Hero;
