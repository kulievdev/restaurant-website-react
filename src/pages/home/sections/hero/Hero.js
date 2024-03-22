import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import spaghettiImage from "../../../../assets/menu-spaghetti.png";

const HeroSection = styled.section``;

const HeroSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    padding: 15rem 5rem;
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

const HeroHeading = styled.h2`
    margin-bottom: 2.2rem;
    color: #311f09;
    font-size: 8rem;
    font-weight: 700;
    line-height: 8.8rem;
`;

const HeroDescription = styled.p`
    margin-bottom: 8.4rem;
    font-weight: 400;
    line-height: 4rem;
    color: #5c4529;
    font-size: 2rem;
`;

const HeroCtaWrapper = styled.div`
    display: flex;
    gap: 2.3rem;
`;

const HeroImageWrapper = styled.div`
    width: 50%;
`;

const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroMainImage = styled.img`
    width: 100%;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroContent>
                    <RestaurantName>DeliziOso</RestaurantName>
                    <HeroHeading>
                        Italian <br />
                        Cuisine
                    </HeroHeading>
                    <HeroDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
                    </HeroDescription>
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
                        <HeroMainImage
                            src={spaghettiImage}
                            alt="Spaghetti Image"
                        />
                    </HeroImageContainer>
                </HeroImageWrapper>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export default Hero;
