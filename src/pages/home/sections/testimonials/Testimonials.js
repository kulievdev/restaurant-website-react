import Testimonial from "./Testimonial";
import { SectionHeading } from "../../../components/layout";
import styled from "styled-components";
import testimonialsData from "./testimonialsData";

const TestimonialsSection = styled.section`
    text-align: center;
    background-image: url(${require("../../../../assets/customers.png")});
    background-size: cover;
    background-position: top;
    background-color: rgb(251, 250, 250);
`;

const TestimonialsSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const TestimonialsWrapper = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: space-between;
`;

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <TestimonialsSectionContainer>
                <SectionHeading $marginBottom="10">
                    What Customers Say
                </SectionHeading>
                <TestimonialsWrapper>
                    {testimonialsData.map((testimonial, idx) => {
                        return (
                            <Testimonial
                                key={idx}
                                img={testimonial.img}
                                name={testimonial.name}
                                occupation={testimonial.occupation}
                                review={testimonial.review}
                            />
                        );
                    })}
                </TestimonialsWrapper>
            </TestimonialsSectionContainer>
        </TestimonialsSection>
    );
};

export default Testimonials;
