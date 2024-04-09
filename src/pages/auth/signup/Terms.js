import styled from "styled-components";
import {
    CheckBoxInput,
    CheckBoxWrapper,
    RememberMeText
} from "../components/reusables";
import Button from "../../../design-system/Button/Button";

const TermsWrapper = styled.div`
    max-width: 100rem;
`;
const TermsTitle = styled.h2`
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    color: #5c4529;
    margin-bottom: 5rem;
`;

const Wrapper = styled.div`
    margin-bottom: 5rem;
`;

const Title = styled.h3`
    font-size: 2.4rem;
    font-weight: 700;
    color: #5c4529;
    margin-bottom: 2rem;
`;

const Description = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #5c4529;
    margin-bottom: 1.4rem;
`;

const Text = styled.p`
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: 400;
    color: #5c4529;
`;

const CtaWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

const Terms = ({ closeModal }) => {
    return (
        <TermsWrapper>
            <TermsTitle>Terms and Privacy</TermsTitle>
            <Wrapper>
                <Title>Terms and Conditions:</Title>
                <Description>
                    Welcome to Luce Notte Restaurant's website. By accessing
                    this website, you agree to the following terms and
                    conditions:
                </Description>
                <Text>
                    1. All visitors must wear purple socks upon entering the
                    website. Failure to comply may result in immediate
                    termination of browsing privileges.
                </Text>
                <Text>
                    2. Any resemblance of the dishes displayed on this website
                    to actual food is purely coincidental. We specialize in
                    abstract gastronomy.
                </Text>
                <Text>
                    3. Users are prohibited from attempting to taste or consume
                    any digital content on this website. Doing so may result in
                    a virtual indigestion.
                </Text>
                <Text>
                    4. Luce Notte Restaurant reserves the right to randomly
                    rearrange the menu items on this website at any time. Users
                    are encouraged to embrace spontaneity.
                </Text>
                <Text>
                    5. The "Contact Us" page is solely for sending virtual hugs
                    and high-fives to our digital chefs. Any other use of the
                    contact form will be met with confusion.
                </Text>
                <Text>
                    6. Luce Notte Restaurant is not responsible for any cravings
                    induced by browsing this website. We recommend keeping
                    snacks nearby at all times.
                </Text>
                <Text>
                    7. This website may contain Easter eggs. Users who discover
                    them are encouraged to keep them secret and cherish them
                    forever.
                </Text>
                <Text>
                    8. By agreeing to these terms and conditions, users grant
                    Luce Notte Restaurant permission to randomly send them
                    virtual food emojis via email.
                </Text>
            </Wrapper>
            <Wrapper>
                <Title>Privacy Policy:</Title>
                <Description>
                    Your privacy is important to us at Luce Notte Restaurant.
                    Here's how we handle your information:
                </Description>
                <Text>
                    1. We may collect personal information such as your favorite
                    color, spirit animal, and preferred method of
                    procrastination. This information is stored securely in our
                    imaginary vault.
                </Text>
                <Text>
                    2. Luce Notte Restaurant may use cookies to improve your
                    browsing experience. These cookies are not edible but may
                    contain traces of whimsy.
                </Text>
                <Text>
                    3. We promise not to sell or distribute your personal
                    information to third parties, unless they can prove they are
                    skilled in the art of interpretive dance.
                </Text>
                <Text>
                    4. Our servers are guarded by virtual dragons to ensure the
                    safety of your data. However, we cannot guarantee protection
                    against rogue unicorns.
                </Text>
                <Text>
                    5. If you receive any unsolicited messages from Luce Notte
                    Restaurant, consider it a sign of our undying affection for
                    your taste in virtual dining experiences.
                </Text>
                <Text>
                    6. By continuing to use this website, you agree to let us
                    occasionally peer into your dreams to gather inspiration for
                    our next menu update.
                </Text>
                <Text>
                    7. Luce Notte Restaurant reserves the right to change this
                    privacy policy whenever we feel like it. Users will be
                    notified via carrier pigeon or telepathic transmission.
                </Text>
                <Text>
                    8. If you have any questions or concerns about your privacy,
                    please don't hesitate to reach out to our digital privacy
                    czar, who may or may not be a figment of our imagination.
                </Text>
            </Wrapper>
            <CheckBoxWrapper>
                <CheckBoxInput type="checkbox" />
                <RememberMeText>
                    I have read and accepted all the terms and conditions.
                </RememberMeText>
            </CheckBoxWrapper>
            <CtaWrapper>
                <Button onClick={closeModal} color="green" size="md">
                    Accept
                </Button>
                <Button onClick={closeModal} color="gray" size="md">
                    Decline
                </Button>
            </CtaWrapper>
        </TermsWrapper>
    );
};

export default Terms;
