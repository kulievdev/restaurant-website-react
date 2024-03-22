import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import spaghettiImage from "../../../../assets/menu-spaghetti.png";

const HeroSection = styled.section``;

const HeroSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    padding: 15rem 0;
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

const SectionHeading = styled.h2`
    margin-bottom: 2.4rem;
    color: #311f09;
    font-size: 8rem;
    font-weight: 600;
    line-height: 8.8rem;
`;

const SectionDescription = styled.p`
    margin-bottom: 8.4rem;
    color: #5c4529;
    font-size: 2rem;
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

const HeroImagesContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`;

const HeroMainImage = styled.img`
    width: 100%;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroContent>
                    <RestaurantName>Delizioso</RestaurantName>
                    <SectionHeading>
                        Italian <br />
                        Cuisine
                    </SectionHeading>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
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
                    <HeroImagesContainer>
                        <HeroMainImage
                            src={spaghettiImage}
                            alt="Spaghetti Image"
                        />
                    </HeroImagesContainer>
                </HeroImageWrapper>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export { Hero };

{
    /* <section id="hero-section">
            <div className="hero-section__container container">
                <div className="hero-section__left">
                    <span>Restaurant</span>
                    <h1 className="hero-section__heading">Italian Cuisine</h1>
                    <p className="hero-section__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sodales senectus dictum arcu sit tristique donec eget.
                    </p>
                    <div className="hero-section__cta">
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="green">
                            Reservation
                        </Button>
                    </div>
                </div>

                <div className="hero-section__right">
                    <img
                        src={spaghettiImage}
                        alt="Spaghetti"
                        className="hero-section__img"
                    />
                </div>
            </div>
        </section> */
}
