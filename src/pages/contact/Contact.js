import styled from "styled-components";
import {
    SectionContainer,
    SectionDescription,
    SectionHeading
} from "../components/layout";
import Input from "../../design-system/Input/Input";
import Button from "../../design-system/Button/Button";
import useWindowWidth from "../../custom-hooks/useWindowWidth";

const ContactSection = styled.section``;

const ContactSectionContainer = styled(SectionContainer)`
    text-align: center;
`;

const Form = styled.form`
    padding: 0;

    @media (min-width: 1350px) {
        padding: 0 10rem;
    }

    @media (min-width: 1720px) {
        padding: 0 20rem;
    }
`;

const Description = styled(SectionDescription)`
    padding: 0 1rem;

    @media (min-width: 450px) {
        padding: 0 3rem;
    }

    @media (min-width: 750px) {
        padding: 0 10rem;
    }
`;

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;

    @media (min-width: 650px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 25rem;
    border: none;
    background-color: rgba(250, 250, 249, 1);
    border-radius: 1rem;
    padding: 2rem 3rem;
    outline-color: #ff8a00;
    color: #5c4529;
    font-size: 1.6rem;
    margin-bottom: 6rem;

    &::placeholder {
        font-size: 1.5rem;
        line-height: 3rem;
        color: #a0978c;
    }

    @media (min-width: 1920px) {
        padding: 3rem;
    }
`;

const Map = styled.div``;

const Iframe = styled.iframe`
    width: 100%;
    height: 80rem;
    border: none;
`;

const Contact = () => {
    const windowWidth = useWindowWidth();

    return (
        <ContactSection>
            <ContactSectionContainer>
                <Form>
                    <SectionHeading $marginBottom="5">
                        Contact Us
                    </SectionHeading>
                    <Description $marginBottom="10">
                        We love hearing from our customers. Feel free to share
                        your experience or ask any questions you may have.
                    </Description>
                    <InputsWrapper>
                        <Input type="text" placeholder="First Name" />
                        <Input type="text" placeholder="Last Name" />
                        <Input type="text" placeholder="Email Address" />
                        <Input type="text" placeholder="Subject" />
                    </InputsWrapper>
                    <TextArea placeholder="Message" />
                    <Button
                        onClick={(e) => e.preventDefault()}
                        color="orange"
                        size="xl"
                        width={windowWidth < 650 ? "full" : "half"}
                    >
                        Submit
                    </Button>
                </Form>
            </ContactSectionContainer>
            <Map>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7850270214817!2d-73.99165022325835!3d40.72274867139201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598474c10bcf%3A0xd62d514f22a03f04!2s205%20Allen%20St%2C%20New%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1713375430917!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></Iframe>
            </Map>
        </ContactSection>
    );
};

export default Contact;
