import aboutOne from "../../assets/about1.png";
import aboutOneSmall from "../../assets/about1small.png";
import aboutTwo from "../../assets/about2.png";
import aboutTwoSmall from "../../assets/about2small.png";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionDescription,
    SectionHeading
} from "../components/layout";
import useWindowWidth from "../../custom-hooks/useWindowWidth";

const AboutSection = styled.section``;

const AboutSectionContainer = styled.div``;

const AboutTop = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;

    padding: 5rem 3rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }

    @media (min-width: 900px) {
        padding: 10rem 10rem;
    }

    @media (min-width: 1240px) {
        padding: 10rem 10rem 10rem 0;
    }

    @media (min-width: 1920px) {
        padding: 10rem 20rem 10rem 0;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;
    }
`;

const AboutBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5rem 3rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }

    @media (min-width: 900px) {
        padding: 10rem 10rem;
    }

    @media (min-width: 1240px) {
        padding: 10rem 0 10rem 10rem;
    }

    @media (min-width: 1920px) {
        padding: 10rem 0 10rem 20rem;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;
    }
`;

const AboutImageWrapper = styled.div`
    width: 100%;

    @media (min-width: 1240px) {
        margin-bottom: 0;
        width: 50%;
    }
`;

const AboutImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AboutImage = styled.img`
    width: 100%;
`;

const AboutContent = styled.div`
    width: 100%;

    @media (min-width: 1240px) {
        width: 50%;
        margin-bottom: 0;
    }
`;

const AboutUs = () => {
    const windowWidth = useWindowWidth();

    return (
        <AboutSection id="reservation-section">
            <AboutSectionContainer>
                <AboutTop>
                    <AboutImageWrapper>
                        <AboutImageContainer>
                            <AboutImage
                                src={
                                    windowWidth > 1240
                                        ? aboutOne
                                        : aboutOneSmall
                                }
                                alt="Reservation Image"
                            />
                        </AboutImageContainer>
                    </AboutImageWrapper>
                    <AboutContent>
                        <SectionHeading $marginBottom="5">
                            <OrangeSpanText>Our</OrangeSpanText> <br />
                            restaurant
                        </SectionHeading>
                        <SectionDescription $marginBottom="10">
                            Welcome to Luce Notte, a culinary oasis nestled in
                            the vibrant heart of downtown Verona. Founded in
                            2015 by Italian-born restaurateur Giovanni Rossi,
                            Luce Notte has quickly become a beloved fixture in
                            the local dining scene, captivating guests with its
                            irresistible blend of traditional flavors and
                            contemporary flair.
                        </SectionDescription>
                    </AboutContent>
                </AboutTop>
                <AboutBottom>
                    <AboutContent>
                        <SectionDescription $marginBottom="10">
                            At Luce Notte, we take pride in delivering an
                            unparalleled dining experience from start to finish.
                            Our menu features a tantalizing array of authentic
                            Italian dishes crafted from the finest
                            locally-sourced ingredients, including handcrafted
                            pastas, succulent seafood, and decadent desserts.
                        </SectionDescription>
                    </AboutContent>
                    <AboutImageWrapper>
                        <AboutImageContainer>
                            <AboutImage
                                src={
                                    windowWidth > 1240
                                        ? aboutTwo
                                        : aboutTwoSmall
                                }
                                alt="Reservation Image"
                            />
                        </AboutImageContainer>
                    </AboutImageWrapper>
                </AboutBottom>
            </AboutSectionContainer>
        </AboutSection>
    );
};

export default AboutUs;
