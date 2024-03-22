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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
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
