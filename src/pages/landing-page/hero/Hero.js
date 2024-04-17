import Button from "../../../design-system/Button/Button";
import styled from "styled-components";
import spaghettiImage from "../../../assets/menu-spaghetti.png";
import {
    SectionHeading,
    SectionDescription,
    SectionContainer,
    OrangeSpanText
} from "../../components/layout";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";

const HeroSection = styled.section``;

const HeroSectionContainer = styled(SectionContainer)`
    @media (min-width: 1240px) {
        display: flex;
    }
`;

const HeroContent = styled.div`
    width: 100%;
    margin-bottom: 16rem;

    @media (min-width: 1240px) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0;
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

    @media (min-width: 1240px) {
        width: 50%;
    }
`;

const HeroImage = styled.img`
    width: 100%;
`;

const Hero = () => {
    const windowWidth = useWindowWidth();
    const navigate = useNavigate();

    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroContent>
                    <RestaurantName>Luce Notte</RestaurantName>
                    <SectionHeading $marginBottom="2.2">
                        Italian <br />
                        Cuisine
                    </SectionHeading>
                    <SectionDescription $marginBottom="8.4">
                        Experience the Essence of Italy at{" "}
                        <OrangeSpanText>Luce Notte,</OrangeSpanText> where each
                        dish embodies the rich flavors and traditions of Italian
                        cuisine. From handmade pastas to mouthwatering pizzas
                        and decadent desserts, our menu promises a culinary
                        journey through Italy's finest. Buon Appetito!
                    </SectionDescription>
                    <HeroCtaWrapper>
                        <Button
                            size={
                                windowWidth > 1620
                                    ? "lg"
                                    : windowWidth > 400
                                    ? "md"
                                    : "sm"
                            }
                            color="orange"
                        >
                            Order Now
                        </Button>
                        <Button
                            size={
                                window.innerWidth > 1620
                                    ? "lg"
                                    : window.innerWidth > 400
                                    ? "md"
                                    : "sm"
                            }
                            color="green"
                            onClick={() => navigate("reservation")}
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
