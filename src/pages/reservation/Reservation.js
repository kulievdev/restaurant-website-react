import styled from "styled-components";
import { OrangeSpanText, SectionHeading } from "../components/layout";
import reservationImg from "../../assets/reservation2.png";

const ReservationSection = styled.section``;

const ReservationSectionContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;

    padding: 5rem 3rem 5rem 0;

    @media (min-width: 500px) {
        padding: 10rem 5rem 10rem 0;
    }

    @media (min-width: 900px) {
        padding: 10rem 10rem 10rem 0;
    }

    @media (min-width: 1240px) {
        display: flex;
        flex-direction: row;
        gap: 8rem;
        padding: 10rem 10rem 0 0;
    }

    @media (min-width: 1920px) {
        padding: 10rem 20rem 10rem 0;
    }
`;

const ReservationImageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    @media (min-width: 1240px) {
        justify-content: center;
        margin-bottom: 0;
        width: 50%;
    }
`;

const ReservationImage = styled.img`
    max-width: 100%;

    @media (min-width: 1240px) {
        width: 100%;
    }
`;

const ReservationContent = styled.div`
    width: 100%;
    text-align: center;
    padding: 15rem 0;

    @media (min-width: 1240px) {
        text-align: start;
        width: 50%;
        margin-bottom: 0;
    }
`;

const Reservation = () => {
    return (
        <ReservationSection>
            <ReservationSectionContainer>
                <ReservationImageWrapper>
                    <ReservationImage
                        src={reservationImg}
                        alt="Reservation Image"
                    />
                </ReservationImageWrapper>
                <ReservationContent>
                    <SectionHeading $marginBottom="5">
                        Book a <OrangeSpanText>table</OrangeSpanText>
                    </SectionHeading>
                </ReservationContent>
            </ReservationSectionContainer>
        </ReservationSection>
    );
};

export default Reservation;
