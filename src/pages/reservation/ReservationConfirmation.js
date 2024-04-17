import styled from "styled-components";
import Button from "../../design-system/Button/Button";
import Logo from "../../design-system/Logo/Logo";
import {
    SectionHeading,
    SectionDescription,
    OrangeSpanText
} from "../components/layout";
import calendarIcon from "../../assets/calendar-icon.svg";
import timeIcon from "../../assets/time-icon.svg";
import personIcon from "../../assets/person-icon.svg";
import Input from "../../design-system/Input/Input";
import {
    CheckBoxInput,
    CheckBoxWrapper,
    RememberMeText
} from "../auth/components/reusables";
import { useNavigate } from "react-router-dom";

const ConfirmationWrapper = styled.div``;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
`;

const CtaWrapper = styled.div`
    display: flex;
    gap: 4rem;
`;

const Title = styled(SectionHeading)`
    text-align: center;
`;

const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
`;

const Detail = styled.div`
    display: flex;
    gap: 2rem;
`;

const Icon = styled.img``;

const Note = styled.div`
    padding: 5rem 13rem;
    background-color: #c6f7ff;
    border: none;
    border-radius: 2rem;
    text-align: center;
    margin-bottom: 6rem;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
    margin-bottom: 7rem;
`;

const Option = styled.option``;

const BottomPart = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
`;

const TermsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TermsTextWrapper = styled.div`
    margin-bottom: 8rem;
`;

const CheckBoxWrapperReservation = styled(CheckBoxWrapper)`
    margin-bottom: 0;
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

const ReservationConfirmation = ({ closeModal }) => {
    const navigate = useNavigate();

    return (
        <ConfirmationWrapper>
            <Navbar>
                <Logo type="white" />
                <CtaWrapper>
                    <Button
                        size="md"
                        color="orange"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Sign in
                    </Button>
                    <Button
                        size="md"
                        color="green"
                        onClick={() => {
                            navigate("/sign-up");
                        }}
                    >
                        Sign up
                    </Button>
                </CtaWrapper>
            </Navbar>
            <Title $marginBottom="4.5">Reservation</Title>
            <DetailsWrapper>
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
                    <SectionDescription>
                        2 people (Standard seating)
                    </SectionDescription>
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
                        type="select"
                        placeholder="Select an occasion (optional)"
                    >
                        <Option>Select an occasion (optional)</Option>
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
                                <RememberMeText>
                                    I agree with what is stated above.
                                </RememberMeText>
                            </CheckBoxWrapperReservation>
                            <CheckBoxWrapperReservation>
                                <CheckBoxInput type="checkbox" />
                                <RememberMeText>
                                    Sign me up to receive dining offers and news
                                    from this restaurant by email.
                                </RememberMeText>
                            </CheckBoxWrapperReservation>
                        </TermsTextWrapper>
                        <Button
                            size="xl"
                            color="orange"
                            width="full"
                            onClick={(e) => {
                                e.preventDefault();
                                closeModal();
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
        </ConfirmationWrapper>
    );
};

export default ReservationConfirmation;
