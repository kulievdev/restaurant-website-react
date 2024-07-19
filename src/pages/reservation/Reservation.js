import styled from "styled-components";
import { OrangeSpanText, SectionHeading } from "../components/layout";
import reservationImg from "../../assets/reservation2.png";
import { useState } from "react";
import Button from "../../design-system/Button/Button";
import Input from "../../design-system/Input/Input";
import Modal from "../../design-system/Modal/Modal";
import ReservationConfirmation from "./ReservationConfirmation";
import { format, parseISO } from "date-fns";

const ReservationSection = styled.section``;

const ReservationSectionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    padding: 5rem 0;

    @media (min-width: 500px) {
        padding: 10rem 0;
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
    max-width: 70rem;
    padding: 5rem 3rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }

    @media (min-width: 1240px) {
        max-width: 52rem;
        padding: 0;
        text-align: start;
        width: 50%;
    }
`;

const Form = styled.form``;

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 7rem;
`;

const Option = styled.option``;

const Reservation = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [partySize, setPartySize] = useState("");
    const [reservationDetails, setReservationDetails] = useState(null);

    const [dateInputType, setDateInputType] = useState("text");
    const [timeInputType, setTimeInputType] = useState("text");
    const [selectInputType, setSelectInputType] = useState("text");
    const [preConfirmationOpen, setPreConfirmationOpen] = useState(false);
    const [postConfirmationOpen, setPostConfirmationOpen] = useState(false);
    const [cancelConfirmationOpen, setCancelConfirmationOpen] = useState(false);

    const handleDate = (e) => {
        const inputDate = e.target.value;
        if (inputDate) {
            const date = new Date(inputDate);
            setDate(date.toISOString().split("T")[0]);
        }
    };

    const handleTime = (e) => {
        const inputTime = e.target.value;
        if (inputTime) {
            const [hours, minutes] = inputTime.split(":");
            const formattedTime = `${hours}:${minutes}`;
            setTime(formattedTime);
        }
    };

    const formattedDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, "MM/dd/yyyy");
    };

    const formattedTime = (timeString) => {
        const [hours, minutes] = timeString.split(":").map(Number);

        const date = new Date();
        date.setHours(hours, minutes, 0, 0);

        return format(date, "hh:mm a");
    };

    const handlePartySize = (e) => {
        setPartySize(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDateStr = formattedDate(date);
        const formattedTimeStr = formattedTime(time);
        const details = { formattedDateStr, formattedTimeStr, partySize };
        setPreConfirmationOpen(true);
        setReservationDetails(details);
    };

    const handleDateFocus = () => setDateInputType("date");
    const handleDateBlur = () => setDateInputType("text");

    const handleTimeFocus = () => setTimeInputType("time");
    const handleTimeBlur = () => setTimeInputType("text");

    const handleSelectFocus = () => setSelectInputType("select");
    const handleSelectBlur = () => setSelectInputType("text");

    const isFormValid = () => date && time && partySize;

    const closePreConfirmation = () => setPreConfirmationOpen(false);
    const closePostConfirmation = () => setPostConfirmationOpen(false);
    const closeCancelConfirmation = () => setCancelConfirmationOpen(false);

    return (
        <>
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
                        <Form onSubmit={handleSubmit}>
                            <InputsWrapper>
                                <Input
                                    type={dateInputType}
                                    placeholder="Date"
                                    handleOnFocus={handleDateFocus}
                                    handleOnBlur={handleDateBlur}
                                    value={date}
                                    onChange={handleDate}
                                />
                                <Input
                                    type={timeInputType}
                                    placeholder="Time"
                                    handleOnFocus={handleTimeFocus}
                                    handleOnBlur={handleTimeBlur}
                                    value={time}
                                    onChange={handleTime}
                                />
                                <Input
                                    type={selectInputType}
                                    placeholder="Party size"
                                    handleOnFocus={handleSelectFocus}
                                    handleOnBlur={handleSelectBlur}
                                    value={partySize}
                                    onChange={handlePartySize}
                                >
                                    <Option>Choose a number</Option>
                                    <Option value="1 person">1 person</Option>
                                    <Option value="2 people">2 People</Option>
                                    <Option value="3 people">3 People</Option>
                                    <Option value="4 people">4 People</Option>
                                    <Option value="5 people">5 People</Option>
                                    <Option value="6 people">6 People</Option>
                                    <Option value="7 people">7 People</Option>
                                    <Option value="8 people">8 People</Option>
                                    <Option value="9 people">9 People</Option>
                                    <Option value="10 people">10 People</Option>
                                    <Option value="11 people">11 People</Option>
                                    <Option value="12 people">12 People</Option>
                                    <Option value="13 people">13 People</Option>
                                    <Option value="14 people">14 People</Option>
                                    <Option value="15 people">15 People</Option>
                                </Input>
                            </InputsWrapper>
                            <Button
                                color="orange"
                                size="xl"
                                width="full"
                                disabled={!isFormValid()}
                            >
                                Book Now
                            </Button>
                        </Form>
                    </ReservationContent>
                </ReservationSectionContainer>
            </ReservationSection>
            {preConfirmationOpen && (
                <Modal
                    show={preConfirmationOpen}
                    onClose={closePreConfirmation}
                >
                    <ReservationConfirmation
                        closeModal={closePreConfirmation}
                        details={reservationDetails}
                    />
                </Modal>
            )}
            {postConfirmationOpen && (
                <Modal
                    show={postConfirmationOpen}
                    onClose={closePostConfirmation}
                >
                    <ReservationConfirmation
                        closeModal={closePostConfirmation}
                    />
                </Modal>
            )}
            {cancelConfirmationOpen && (
                <Modal
                    show={cancelConfirmationOpen}
                    onClose={closeCancelConfirmation}
                >
                    <ReservationConfirmation
                        closeModal={closeCancelConfirmation}
                    />
                </Modal>
            )}
        </>
    );
};

export default Reservation;
