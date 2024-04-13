import styled from "styled-components";
import {
    SectionContainer,
    SectionDescription,
    SectionHeading
} from "../components/layout";
import Input from "../../design-system/Input/Input";
import Button from "../../design-system/Button/Button";

const ContactSection = styled.section``;

const ContactSectionContainer = styled(SectionContainer)`
    text-align: center;
`;

const Form = styled.form`
    padding: 0 30rem;
`;

const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
`;

const ButtonWrapper = styled.div`
    padding: 0 30rem;
`;

const Contact = () => {
    return (
        <ContactSection>
            <ContactSectionContainer>
                <Form>
                    <SectionHeading $marginBottom="5">
                        Contact Us
                    </SectionHeading>
                    <SectionDescription $marginBottom="10">
                        We love hearing from our customers. Feel free to share
                        your experience or ask any questions you may have.
                    </SectionDescription>
                    <InputsWrapper>
                        <Input type="text" placeholder="First Name" />
                        <Input type="text" placeholder="Last Name" />
                        <Input type="text" placeholder="Email Address" />
                        <Input type="text" placeholder="Subject" />
                    </InputsWrapper>
                    <ButtonWrapper>
                        <Button
                            onClick={(e) => e.preventDefault()}
                            color="orange"
                            size="xl"
                            width="full"
                        >
                            Submit
                        </Button>
                    </ButtonWrapper>
                </Form>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export default Contact;
