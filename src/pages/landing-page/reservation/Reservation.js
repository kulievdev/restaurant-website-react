import reservationImg from "../../../assets/reservation.png";
import Button from "../../../design-system/Button/Button";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionDescription,
    SectionHeading
} from "../../components/layout";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";

const ReservationSection = styled.section`
    background-color: #fff4e766;
`;

const ReservationSectionContainer = styled.div`
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
        gap: 10rem;
    }
`;

const ReservationImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8rem;

    @media (min-width: 1240px) {
        margin-bottom: 0;
        width: 50%;
    }
`;

const ReservationImage = styled.img`
    width: 100%;
`;

const ReservationContent = styled.div`
    width: 100%;
    margin-bottom: 16rem;

    @media (min-width: 1240px) {
        width: 50%;
        margin-bottom: 0;
    }
`;

const Reservation = () => {
    const windowWidth = useWindowWidth();
    const navigate = useNavigate();

    return (
        <ReservationSection id="reservation-section">
            <ReservationSectionContainer>
                <ReservationImageWrapper>
                    <ReservationImage
                        src={reservationImg}
                        alt="Reservation Image"
                    />
                </ReservationImageWrapper>
                <ReservationContent>
                    <SectionHeading $marginBottom="5">
                        Let's reserve <br />
                        <OrangeSpanText>a table</OrangeSpanText>
                    </SectionHeading>
                    <SectionDescription $marginBottom="10">
                        Ready to savor the flavors of Italy with us? Secure your
                        spot at <OrangeSpanText>Luce Notte,</OrangeSpanText> by
                        making a reservation today. Whether it's a romantic
                        dinner for two or a lively gathering with friends, we're
                        here to make your dining experience memorable. Simply
                        with click below or give us a call to reserve your
                        table. We can't wait to welcome you!
                    </SectionDescription>
                    <Button
                        size={
                            windowWidth > 1620
                                ? "lg"
                                : windowWidth > 400
                                ? "md"
                                : "sm"
                        }
                        color="orange"
                        onClick={() => navigate("/reservation")}
                    >
                        Reservation
                    </Button>
                </ReservationContent>
            </ReservationSectionContainer>
        </ReservationSection>
    );
};

export default Reservation;
