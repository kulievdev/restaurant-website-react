import aboutOne from "../../assets/about1.png";
import aboutOneSmall from "../../assets/about1small.png";
import aboutTwo from "../../assets/about2.png";
import aboutTwoSmall from "../../assets/about2small.png";
import chef from "../../assets/executiveChef.png";
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
        padding: 10rem;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8rem;
        padding: 10rem 10rem 0 0;
    }

    @media (min-width: 1920px) {
        padding: 10rem 20rem 0 0;
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
        padding: 10rem;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8rem;
        padding: 0 0 10rem 10rem;
    }

    @media (min-width: 1920px) {
        padding: 0 0 10rem 20rem;
    }
`;

const AboutImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1240px) {
        margin-bottom: 0;
        width: 50%;
    }
`;

const AboutImage = styled.img`
    max-width: 100%;

    @media (min-width: 1240px) {
        width: 100%;
    }
`;

const AboutContent = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 1240px) {
        text-align: start;
        width: 50%;
        margin-bottom: 0;
    }
`;

const OwnerWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    padding: 5rem 3rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }

    @media (min-width: 900px) {
        padding: 10rem;
    }

    @media (min-width: 1240px) {
        padding: 10rem;
    }

    @media (min-width: 1920px) {
        padding: 10rem 20rem;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10rem;
    }
`;

const OwnerImageWrapper = styled(AboutImageWrapper)``;

const OwnerImage = styled.img`
    border-radius: 5rem;
    max-width: 100%;
`;

const OwnerContent = styled(AboutContent)`
    text-align: center;
    @media (min-width: 1240px) {
        text-align: start;
    }
`;

const OwnerHeading = styled(SectionHeading)``;

const OwnerName = styled.p`
    font-size: 3rem;
    font-weight: 600;
    line-height: 6rem;
    color: #000;
    margin-bottom: 10rem;

    @media (min-width: 1240px) {
        font-size: 4rem;
    }
`;

const OwnerQuote = styled(SectionDescription)`
    font-style: italic;
`;

const AboutUs = () => {
    const windowWidth = useWindowWidth();

    return (
        <AboutSection id="reservation-section">
            <AboutSectionContainer>
                <AboutTop>
                    <AboutImageWrapper>
                        <AboutImage
                            src={windowWidth > 1240 ? aboutOne : aboutOneSmall}
                            alt="Reservation Image"
                        />
                    </AboutImageWrapper>
                    <AboutContent>
                        <SectionHeading $marginBottom="5">
                            <OrangeSpanText>Our</OrangeSpanText> <br />
                            restaurant
                        </SectionHeading>
                        <SectionDescription $marginBottom="10">
                            Welcome to Luce Notte, a culinary oasis nestled in
                            the vibrant heart of downtown Verona. Founded in
                            2015 by Italian-born restaurateur Ismail Marzuki,
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
                        <AboutImage
                            src={windowWidth > 1240 ? aboutTwo : aboutTwoSmall}
                            alt="Reservation Image"
                        />
                    </AboutImageWrapper>
                </AboutBottom>
                <OwnerWrapper>
                    <OwnerImageWrapper>
                        <OwnerImage src={chef} alt="Reservation Image" />
                    </OwnerImageWrapper>
                    <OwnerContent>
                        <OwnerHeading $marginBottom="5">
                            <OrangeSpanText>Owner</OrangeSpanText> & <br />
                            Executive Chef
                        </OwnerHeading>
                        <OwnerName>Ismail Marzuki</OwnerName>
                        <OwnerQuote $marginBottom="5">
                            "Culinary artistry begins with a vision, flourishes
                            with dedication, and shines with passion. As a
                            restaurant owner, I am privileged to orchestrate
                            this symphony of flavors, creating unforgettable
                            experiences one dish at a time."
                        </OwnerQuote>
                    </OwnerContent>
                </OwnerWrapper>
            </AboutSectionContainer>
        </AboutSection>
    );
};

export default AboutUs;
