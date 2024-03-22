import reservationImg from "../../../../assets/reservation.png";
import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionContainer,
    SectionDescription,
    SectionHeading
} from "../../../components/layout";

const ReservationSection = styled.section`
    background-color: #fff4e766;
`;

const ReservationSectionContainer = styled(SectionContainer)`
    display: flex;
    align-items: center;
    gap: 4rem;
`;

const ReservationImageWrapper = styled.div`
    width: 50%;
`;

const ReservationImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ReservationImage = styled.img`
    width: 100%;
`;

const ReservationContent = styled.div`
    width: 50%;
`;

const Reservation = () => {
    return (
        <ReservationSection id="reservation-section">
            <ReservationSectionContainer>
                <ReservationImageWrapper>
                    <ReservationImageContainer>
                        <ReservationImage
                            src={reservationImg}
                            alt="Reservation Image"
                        />
                    </ReservationImageContainer>
                </ReservationImageWrapper>
                <ReservationContent>
                    <SectionHeading $marginBottom="5">
                        Let's reserve <br />
                        <OrangeSpanText>a table</OrangeSpanText>
                    </SectionHeading>
                    <SectionDescription $marginBottom="10">
                        Ready to savor the flavors of Italy with us? Secure your
                        spot at <OrangeSpanText>DeliziOso,</OrangeSpanText> by
                        making a reservation today. Whether it's a romantic
                        dinner for two or a lively gathering with friends, we're
                        here to make your dining experience memorable. Simply
                        with click below or give us a call to reserve your
                        table. We can't wait to welcome you!
                    </SectionDescription>
                    <Button size="lg" color="orange">
                        Reservation
                    </Button>
                </ReservationContent>
            </ReservationSectionContainer>
        </ReservationSection>
    );
};

export default Reservation;
