import styled from "styled-components";
import { OrangeSpanText, SectionHeading } from "../components/layout";
import reservationImg from "../../assets/reservation2.png";
import { useState } from "react";
import Button from "../../design-system/Button/Button";
import Input from "../../design-system/Input/Input";
import Modal from "../../design-system/Modal/Modal";
import ReservationConfirmation from "./ReservationConfirmation";

const ReservationSection = styled.section``;

const ReservationSectionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;

    padding: 5rem 0;

    @media (min-width: 500px) {
        padding: 10rem 0;
    }

    @media (min-width: 900px) {
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
        margin-bottom: 0;
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
    const [dateInputType, setDateInputType] = useState("text");
    const [timeInputType, setTimeInputType] = useState("text");
    const [selectInputType, setSelectInputType] = useState("text");
    const [preConfirmationOpen, setPreConfirmationOpen] = useState(false);
    const [postConfirmationOpen, setPostConfirmationOpen] = useState(false);
    const [cancelConfirmationOpen, setCancelConfirmationOpen] = useState(false);

    const closePreConfirmation = () => {
        setPreConfirmationOpen(false);
    };

    const closePostConfirmation = () => {
        setPostConfirmationOpen(false);
    };

    const closeCancelConfirmation = () => {
        setCancelConfirmationOpen(false);
    };

    const handleDateFocus = () => {
        setDateInputType("date");
    };

    const handleDateBlur = () => {
        setDateInputType("text");
    };

    const handleTimeFocus = () => {
        setTimeInputType("time");
    };

    const handleTimeBlur = () => {
        setTimeInputType("text");
    };

    const handleSelectFocus = () => {
        setSelectInputType("select");
    };

    const handleSelectBlur = () => {
        setSelectInputType("text");
    };

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
                        <Form>
                            <InputsWrapper>
                                <Input
                                    type={dateInputType}
                                    placeholder="Date"
                                    handleOnFocus={handleDateFocus}
                                    handleOnBlur={handleDateBlur}
                                />
                                <Input
                                    type={timeInputType}
                                    placeholder="Time"
                                    handleOnFocus={handleTimeFocus}
                                    handleOnBlur={handleTimeBlur}
                                />
                                <Input
                                    type={selectInputType}
                                    placeholder="Party size"
                                    handleOnFocus={handleSelectFocus}
                                    handleOnBlur={handleSelectBlur}
                                >
                                    <Option>Choose a number</Option>
                                    <Option>1 person</Option>
                                    <Option>2 People</Option>
                                    <Option>3 People</Option>
                                    <Option>4 People </Option>
                                    <Option>5 People</Option>
                                    <Option>6 People</Option>
                                    <Option>7 People</Option>
                                    <Option>8 People</Option>
                                    <Option>9 People</Option>
                                    <Option>10 People</Option>
                                    <Option>11 People</Option>
                                    <Option>12 People</Option>
                                    <Option>13 People</Option>
                                    <Option>14 People</Option>
                                    <Option>15 People</Option>
                                </Input>
                            </InputsWrapper>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPreConfirmationOpen(true);
                                }}
                                color="orange"
                                size="xl"
                                width="full"
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
                    onClose={cancelConfirmationOpen}
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
