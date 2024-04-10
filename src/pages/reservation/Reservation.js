import styled from "styled-components";
import { OrangeSpanText, SectionHeading } from "../components/layout";
import reservationImg from "../../assets/reservation2.png";
import { useState } from "react";

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

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    max-width: 50rem;
`;

const DatePicker = styled.input`
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 2rem 3rem;
    outline-color: #ff8a00;
    color: #5c4529;
    font-size: 1.6rem;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #5c4529;
    }

    @media (min-width: 1920px) {
        padding: 3rem;
    }
`;

const TimePicker = styled.input`
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 2rem 3rem;
    outline-color: #ff8a00;
    color: #5c4529;
    font-size: 1.6rem;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #5c4529;
    }

    @media (min-width: 1920px) {
        padding: 3rem;
    }
`;

const Select = styled.select`
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 2rem 3rem;
    outline-color: #ff8a00;
    font-size: 1.6rem;
    color: #5c4529;

    @media (min-width: 1920px) {
        padding: 3rem;
    }
`;

const Option = styled.option`
    &:hover {
        background-color: yellow;
    }
`;

const Reservation = () => {
    const [dateInputType, setDateInputType] = useState("text");
    const [timeInputType, setTimeInputType] = useState("text");

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
                    <InputsWrapper>
                        <DatePicker
                            type={dateInputType}
                            placeholder="Date"
                            onFocus={handleDateFocus}
                            onBlur={handleDateBlur}
                        />
                        <TimePicker
                            type={timeInputType}
                            placeholder="Time"
                            onFocus={handleTimeFocus}
                            onBlur={handleTimeBlur}
                        />
                        <Select>
                            <Option>Party size</Option>
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
                        </Select>
                    </InputsWrapper>
                </ReservationContent>
            </ReservationSectionContainer>
        </ReservationSection>
    );
};

export default Reservation;
