import reservationImg from "../../../../assets/reservation.png";
import Button from "../../../../design-system/Button/Button";
import styled from "styled-components";

const ReservationSection = styled.section`
    background-color: #fff4e766;
`;

const ReservationSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;

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

const ReservationHeading = styled.h2`
    font-size: 60px;
    line-height: 70px;
    color: rgb(49, 31, 9);
    margin-bottom: 50px;
`;

const ReservationSpanText = styled.span`
    color: #ff8a00;
`;

const ReservationDescription = styled.p`
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;
    margin-bottom: 10rem;
    color: #5c4529;
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
                    <ReservationHeading>
                        Let's reserve <br />
                        <ReservationSpanText>a table</ReservationSpanText>
                    </ReservationHeading>
                    <ReservationDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam
                    </ReservationDescription>
                    <Button size="lg" color="orange">
                        Reservation
                    </Button>
                </ReservationContent>
            </ReservationSectionContainer>
        </ReservationSection>
    );
};

export default Reservation;
