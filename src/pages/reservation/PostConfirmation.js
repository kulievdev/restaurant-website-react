import styled from "styled-components";
import { SectionDescription } from "../components/layout";
import checkReservationIcon from "../../assets/icon-check-confirm.svg";
import calendarReservationIcon from "../../assets/icon-calendar-confirm.svg";
import confirmImage from "../../assets/confirm-image.png";
import calendarIcon from "../../assets/calendar-icon.svg";
import timeIcon from "../../assets/time-icon.svg";
import personIcon from "../../assets/person-icon.svg";
import modifyIcon from "../../assets/icon-modify.svg";
import cancelIcon from "../../assets/icon-cancel.svg";

const BannerWrapper = styled.div`
    background-image: url(${require("../../assets/green-bg.png")});
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

    @media (min-width: 1250px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

const CtaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;

    @media (min-width: 1250px) {
        flex-wrap: nowrap;
        flex-direction: column;
        margin-top: 0;
    }
`;

const ModifyButton = styled.button`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
    padding: 2rem 6rem;
    border-radius: 2rem;
    color: #123968;
    background-color: rgba(0, 116, 255, 0.11);
    border: none;
`;
const CancelButton = styled(ModifyButton)`
    color: #ea1010;
    background-color: rgba(255, 0, 0, 0.1);
`;

const PostConfirmation = ({ closeModal }) => {
    return (
        <>
            <BannerWrapper>
                <Title>Reservation has been confirmed.</Title>
                <DetailWrapper>
                    <Icon src={checkReservationIcon} alt="Check Icon" />
                    <Text>
                        The confirmation result has been sent to your email.
                    </Text>
                </DetailWrapper>
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
                                Saturday, 13 April 2024
                            </SectionDescription>
                        </Detail>
                        <Detail>
                            <Icon src={timeIcon} alt="Time icon" />
                            <SectionDescription>04:30 pm</SectionDescription>
                        </Detail>
                        <Detail>
                            <Icon src={personIcon} alt="Person icon" />
                            <SectionDescription>2 people</SectionDescription>
                        </Detail>
                    </ReservationDetailsBody>
                </ReservationDetailsWrapper>
                <CtaWrapper>
                    <ModifyButton>
                        Modify <Icon src={modifyIcon} alt="Modify Icon" />
                    </ModifyButton>
                    <CancelButton onClick={closeModal}>
                        Cancel <Icon src={cancelIcon} alt="Cancel Icon" />
                    </CancelButton>
                </CtaWrapper>
            </InfoWrapper>
        </>
    );
};

export default PostConfirmation;
