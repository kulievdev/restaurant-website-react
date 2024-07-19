import { format, parseISO } from "date-fns";
import styled from "styled-components";
import {
    OrangeSpanText,
    SectionDescription,
    SectionHeading
} from "../components/layout";
import {
    CheckBoxInput,
    CheckBoxWrapper,
    RememberMeText
} from "../auth/components/reusables";
import Input from "../../design-system/Input/Input";
import Button from "../../design-system/Button/Button";
import calendarIcon from "../../assets/calendar-icon.svg";
import timeIcon from "../../assets/time-icon.svg";
import personIcon from "../../assets/person-icon.svg";
import { useState } from "react";

const Title = styled(SectionHeading)`
    text-align: center;

    @media (max-width: 610px) {
        font-size: 4rem;
    }

    @media (max-width: 360px) {
        font-size: 3rem;
    }
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: rgba(250, 250, 249, 1);
    margin-bottom: 5rem;
    border-radius: 2rem;
    padding: 2rem;

    @media (min-width: 645px) {
        padding: 3rem;
    }

    @media (min-width: 1050px) {
        flex-direction: row;
        justify-content: space-between;
        background-color: transparent;
        padding: 0;
        gap: 0;
    }
`;

const Detail = styled.div`
    display: flex;
    gap: 2rem;
`;

const Icon = styled.img``;

const Note = styled.div`
    padding: 2.5rem 2rem;
    background-color: #c6f7ff;
    border: none;
    border-radius: 2rem;
    text-align: center;
    margin-bottom: 6rem;

    @media (min-width: 645px) {
        padding: 5rem 8rem;
    }

    @media (min-width: 850px) {
        padding: 5rem 13rem;
    }
`;

const Form = styled.form``;

const Header = styled.h3`
    font-size: 2.6rem;
    font-weight: 600;
    color: #311f09;
    line-height: 4rem;
    margin-bottom: 3rem;
`;

const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 4rem;
    margin-bottom: 7rem;

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Option = styled.option``;

const BottomPart = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 4rem;

    @media (min-width: 950px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const TermsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TermsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    gap: 1.5rem;
`;

const CheckBoxWrapperReservation = styled(CheckBoxWrapper)`
    align-items: center;
    margin-bottom: 0;
`;

const TermTextReservation = styled(RememberMeText)`
    line-height: normal;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    color: #5c4529;
    font-size: 1.6rem;
    line-height: 3.5rem;

    @media (min-width: 1620px) {
        font-size: 2rem;
        line-height: 4rem;
    }
`;

const PreConfirmation = ({
    setPreConfirmation,
    setPostConfirmation,
    details
}) => {
    const [selectInputType, setSelectInputType] = useState("text");

    const handleSelectFocus = () => {
        setSelectInputType("select");
    };

    const handleSelectBlur = () => {
        setSelectInputType("text");
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

    const formattedDateStr = formattedDate(details.date);
    const formattedTimeStr = formattedTime(details.time);

    return (
        <>
            <Title $marginBottom="4.5">Reservation</Title>
            <DetailsWrapper>
                <Detail>
                    <Icon src={calendarIcon} alt="Calendar icon" />
                    <SectionDescription>{formattedDateStr}</SectionDescription>
                </Detail>
                <Detail>
                    <Icon src={timeIcon} alt="Time icon" />
                    <SectionDescription>{formattedTimeStr}</SectionDescription>
                </Detail>
                <Detail>
                    <Icon src={personIcon} alt="Person icon" />
                    <SectionDescription>{details.partySize}</SectionDescription>
                </Detail>
            </DetailsWrapper>
            <Note>
                <SectionDescription>
                    Due to limited availability, we can hold this table for you
                    for <OrangeSpanText>5:00 minutes</OrangeSpanText>
                </SectionDescription>
            </Note>
            <Form>
                <Header>Details</Header>
                <InputsWrapper>
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="tel" placeholder="Phone Number" />
                    <Input type="email" placeholder="Email Address" />
                    <Input
                        type={selectInputType}
                        placeholder="Select an occasion"
                        handleOnFocus={handleSelectFocus}
                        handleOnBlur={handleSelectBlur}
                    >
                        <Option>Regular Dining</Option>
                        <Option>Birthday Party</Option>
                        <Option>Anniversary Celebration</Option>
                        <Option>Corporate Event</Option>
                        <Option>Retirement Party</Option>
                        <Option>Networking Event</Option>
                        <Option>Graduation Party</Option>
                    </Input>
                    <Input type="text" placeholder="Add a special request" />
                </InputsWrapper>
                <BottomPart>
                    <TermsWrapper>
                        <TermsTextWrapper>
                            <CheckBoxWrapperReservation>
                                <CheckBoxInput type="checkbox" />
                                <TermTextReservation>
                                    I agree with what is stated above.
                                </TermTextReservation>
                            </CheckBoxWrapperReservation>
                            <CheckBoxWrapperReservation>
                                <CheckBoxInput type="checkbox" />
                                <TermTextReservation>
                                    Sign me up to receive dining offers.
                                </TermTextReservation>
                            </CheckBoxWrapperReservation>
                        </TermsTextWrapper>
                        <Button
                            size="xl"
                            color="orange"
                            width="full"
                            onClick={(e) => {
                                e.preventDefault();
                                setPreConfirmation(false);
                                setPostConfirmation(true);
                            }}
                        >
                            Confirm Reservation
                        </Button>
                    </TermsWrapper>
                    <InfoWrapper>
                        <Header>Restaurant Information</Header>
                        <Link
                            target="_blank"
                            href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                        >
                            205 Allen St <br /> New York, NY 10002, USA
                        </Link>
                        <Link href="mailto:Luce Notte@gmail.com">
                            Luce Notte@gmail.com
                        </Link>
                        <Link href="tel:347-567-2828" className="footer__text">
                            222-222-2222
                        </Link>
                    </InfoWrapper>
                </BottomPart>
            </Form>
        </>
    );
};

export default PreConfirmation;
