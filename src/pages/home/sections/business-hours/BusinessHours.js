import styled from "styled-components";
import Button from "../../../../design-system/Button/Button";
import {
    SectionContainer,
    SectionDescription,
    SectionHeading
} from "../../../components/layout";
import useWindowWidth from "../../../../custom-hooks/useWindowWidth";

const BusinessHoursSection = styled.section``;

const BusinessHoursSectionContainer = styled(SectionContainer)``;

const BusinessHoursBackground = styled.div`
    max-width: 115rem;
    height: 75rem;
    margin: 0 auto;
    border-radius: 5rem;
    padding: 0 2rem;

    background-image: url(${require("../../../../assets/business-hours.png")});

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 700px) {
        border-radius: 15rem;
    }
`;

const MainHeading = styled(SectionHeading)`
    color: #fff;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 525px) {
        font-size: 3.5rem;
    }

    @media (max-width: 365px) {
        font-size: 3rem;
    }
`;

const MiniHeading = styled.h3`
    color: #fff;
    font-size: 4rem;
    margin-bottom: 1.5rem;

    @media (max-width: 525px) {
        font-size: 2.5rem;
    }
    @media (max-width: 365px) {
        font-size: 2rem;
    }
`;

const HoursWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    margin-bottom: 5rem;
`;

const Hours = styled(SectionDescription)`
    color: #fff;
    text-align: center;

    @media (max-width: 525px) {
        font-size: 1.4rem;
    }
    @media (max-width: 365px) {
        font-size: 1rem;
    }
`;

const ButtonActionsWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 2.3rem;

    @media (min-width: 450px) {
        display: flex;
        flex-direction: row;
        gap: 2.3rem;
    }
`;

const BusinessHours = () => {
    const windowWidth = useWindowWidth();

    return (
        <BusinessHoursSection id="hours-section">
            <BusinessHoursSectionContainer>
                <BusinessHoursBackground>
                    <MainHeading>We are open from</MainHeading>
                    <MiniHeading>Monday - Sunday</MiniHeading>
                    <HoursWrapper>
                        <Hours>Launch: Mon-Sun: 11:00am-02:00pm</Hours>
                        <Hours>Dinner: Sunday: 04:00pm-08:00pm</Hours>
                        <Hours>04:00pm-09:00pm</Hours>
                    </HoursWrapper>
                    <ButtonActionsWrapper>
                        <Button
                            size={
                                windowWidth > 1240
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
                                window.innerWidth > 1240
                                    ? "lg"
                                    : window.innerWidth > 400
                                    ? "md"
                                    : "sm"
                            }
                            color="white"
                        >
                            Reservation
                        </Button>
                    </ButtonActionsWrapper>
                </BusinessHoursBackground>
            </BusinessHoursSectionContainer>
        </BusinessHoursSection>
    );
};

export default BusinessHours;
