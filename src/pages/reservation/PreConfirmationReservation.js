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
import { useState, useEffect } from "react";

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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [occasionType, setOccasionType] = useState("");
    const [specialRequest, setSpecialRequest] = useState("");

    const [guestDetails, setGuestDetails] = useState(null);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOccasionType = (e) => {
        setOccasionType(e.target.value);
    };

    const handleSpecialRequest = (e) => {
        setSpecialRequest(e.target.value);
    };

    const isFormValid = () =>
        firstName && lastName && phoneNumber && email && occasionType;

    const handleSubmit = (e) => {
        e.preventDefault();

        const guestDetails = {
            firstName,
            lastName,
            phoneNumber,
            email,
            occasionType,
            specialRequest
        };
        setGuestDetails(guestDetails);
        setPreConfirmation(false);
        setPostConfirmation(true);
    };

    const [selectInputType, setSelectInputType] = useState("text");
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
            2,
            "0"
        )}`;
    };

    const handleSelectFocus = () => {
        setSelectInputType("select");
    };

    const handleSelectBlur = () => {
        setSelectInputType("text");
    };

    return (
        <>
            <Title $marginBottom="4.5">Reservation</Title>
            <DetailsWrapper>
                <Detail>
                    <Icon src={calendarIcon} alt="Calendar icon" />
                    <SectionDescription>{details.date}</SectionDescription>
                </Detail>
                <Detail>
                    <Icon src={timeIcon} alt="Time icon" />
                    <SectionDescription>{details.time}</SectionDescription>
                </Detail>
                <Detail>
                    <Icon src={personIcon} alt="Person icon" />
                    <SectionDescription>{details.partySize}</SectionDescription>
                </Detail>
            </DetailsWrapper>
            <Note>
                <SectionDescription>
                    Due to limited availability, we can hold this table for you
                    for{" "}
                    <OrangeSpanText>
                        {formatTime(timeLeft)} minutes
                    </OrangeSpanText>
                </SectionDescription>
            </Note>
            <Form onSubmit={handleSubmit}>
                <Header>Details</Header>
                <InputsWrapper>
                    <Input
                        value={firstName}
                        onChange={handleFirstName}
                        type="text"
                        placeholder="First Name"
                    />
                    <Input
                        value={lastName}
                        onChange={handleLastName}
                        type="text"
                        placeholder="Last Name"
                    />
                    <Input
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        type="tel"
                        placeholder="Phone Number"
                    />
                    <Input
                        value={email}
                        onChange={handleEmail}
                        type="email"
                        placeholder="Email Address"
                    />
                    <Input
                        value={occasionType}
                        onChange={handleOccasionType}
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
                    <Input
                        value={specialRequest}
                        onChange={handleSpecialRequest}
                        type="text"
                        placeholder="Add a special request"
                    />
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
                            disabled={!isFormValid()}
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
