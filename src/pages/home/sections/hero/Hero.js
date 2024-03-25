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
    @media (min-width: 960px) {
        display: flex;
    }
`;

const HeroContent = styled.div`
    width: 100%;
    margin-bottom: 8rem;

    @media (min-width: 960px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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
    flex-direction: column;
    gap: 2.3rem;
    width: max-content;

    @media (min-width: 365px) {
        display: flex;
        flex-direction: row;
        gap: 2.3rem;
    }
`;

const HeroImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 960px) {
        width: 50%;
    }
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
                        <Button
                            size={
                                window.innerWidth > 1240
                                    ? "lg"
                                    : window.innerWidth > 400
                                    ? "md"
                                    : "sm"
                            }
                            color="orange"
                        >
                            Order Now
                        </Button>
                        <Button
                            size={
                                window.innerWidth > 1240
                                    ? "lg"
                                    : window.innerWidth > 400
                                    ? "md"
                                    : "sm"
                            }
                            color="green"
                        >
                            Reservation
                        </Button>
                    </HeroCtaWrapper>
                </HeroContent>
                <HeroImageWrapper>
                    <HeroImage src={spaghettiImage} alt="Spaghetti Image" />
                </HeroImageWrapper>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export default Hero;
