import styled from "styled-components";
import { SectionDescription } from "../components/layout";
import calendarReservationIcon from "../../assets/icon-calendar-confirm.svg";
import confirmImage from "../../assets/confirm-image.png";
import calendarIcon from "../../assets/calendar-icon.svg";
import timeIcon from "../../assets/time-icon.svg";
import personIcon from "../../assets/person-icon.svg";

const BannerWrapper = styled.div`
    background-image: url(${require("../../assets/orange-bg.png")});
    padding: 2rem 3rem;

    width: calc(100% + 6rem);
    margin: 0 -3rem;
    margin-bottom: 8rem;

    & > *:nth-child(2) {
        margin-bottom: 1.6rem;
    }

    @media (min-width: 650px) {
        padding: 4rem 6rem;
        width: calc(100% + 12rem);
        margin: 0 -6rem;
        margin-bottom: 8rem;
    }
`;

const Title = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 4.4rem;
    margin-bottom: 3rem;

    @media (min-width: 375px) {
        font-size: 3rem;
    }

    @media (min-width: 420px) {
        font-size: 3.5rem;
    }

    @media (min-width: 1620px) {
        font-size: 4rem;
    }
`;

const DetailWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const Icon = styled.img``;

const Text = styled(SectionDescription)`
    color: #fff;
    font-weight: 400;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;

    @media (min-width: 1250px) {
        display: flex;
        flex-direction: row;
        gap: 8rem;
        align-items: center;
        max-width: none;
    }
`;

const Image = styled.img`
    max-width: 33rem;
    margin: 0;
    margin-bottom: 6rem;

    @media (min-width: 450px) {
        margin: 0 auto;
        margin-bottom: 6rem;
    }

    @media (min-width: 1250px) {
        margin: 0;
    }
`;

const ReservationDetailsWrapper = styled.div``;

const ReservationDetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 2rem;
    padding: 3rem;
`;

const Header = styled.h3`
    font-size: 2.6rem;
    font-weight: 600;
    color: #311f09;
    line-height: 4rem;
    margin-bottom: 1.4rem;
`;

const Detail = styled.div`
    display: flex;
    gap: 2rem;
`;

const CancelButton = styled.button`
    cursor: pointer;
    width: 100%;
    gap: 2rem;
    font-size: 2rem;
    padding: 2rem 6rem;
    border-radius: 1rem;
    color: #fff;
    background-color: rgba(0, 116, 255, 0.11);
    border: none;
    background-color: #ff3838;

    @media (min-width: 750px) {
        max-width: 50rem;
    }
`;

const CancelConfirmation = ({ closeModal, details }) => {
    return (
        <>
            <BannerWrapper>
                <Title>Are you sure you want to cancel the reservation?</Title>
                <DetailWrapper>
                    <Icon src={calendarReservationIcon} alt="Calendar Icon" />
                    <Text>Booking ID : #123456</Text>
                </DetailWrapper>
            </BannerWrapper>
            <InfoWrapper>
                <Image src={confirmImage} alt="Image of Restaurant" />
                <ReservationDetailsWrapper>
                    <Header>Reservation Details</Header>
                    <ReservationDetailsBody>
                        <Detail>
                            <Icon src={calendarIcon} alt="Calendar icon" />
                            <SectionDescription>
                                {details.date}
                            </SectionDescription>
                        </Detail>
                        <Detail>
                            <Icon src={timeIcon} alt="Time icon" />
                            <SectionDescription>
                                {" "}
                                {details.time}
                            </SectionDescription>
                        </Detail>
                        <Detail>
                            <Icon src={personIcon} alt="Person icon" />
                            <SectionDescription>
                                {" "}
                                {details.partySize}
                            </SectionDescription>
                        </Detail>
                    </ReservationDetailsBody>
                </ReservationDetailsWrapper>
            </InfoWrapper>
            <CancelButton onClick={closeModal}>Cancel Reservation</CancelButton>
        </>
    );
};

export default CancelConfirmation;
