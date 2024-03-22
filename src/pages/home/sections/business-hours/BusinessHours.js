import styled from "styled-components";
import Button from "../../../../design-system/Button/Button";

const BusinessHoursSection = styled.section``;

const BusinessHoursSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const BusinessHoursBackground = styled.div`
    max-width: 144rem;
    height: 75rem;
    margin: 0 auto;
    border-radius: 15rem;

    background-image: url(${require("../../../../assets/business-hours.png")});

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainHeading = styled.h2`
    color: #fff;
    font-size: 8rem;
    line-height: 16rem;
`;

const MiniHeading = styled.h3`
    color: #fff;
    font-size: 4rem;
    margin-bottom: 1.5rem;
`;

const HoursWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    margin-bottom: 5rem;
`;

const Hours = styled.p`
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 2.5rem;
    line-height: 4rem;
`;

const ButtonActionsWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const BusinessHours = () => {
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
                        <Button size="lg" color="orange">
                            Order Now
                        </Button>
                        <Button size="lg" color="white">
                            Reservation
                        </Button>
                    </ButtonActionsWrapper>
                </BusinessHoursBackground>
            </BusinessHoursSectionContainer>
        </BusinessHoursSection>
    );
};

export default BusinessHours;
