import styled from "styled-components";

const TestimonialWrapper = styled.div`
    width: 30%;
    text-align: center;
`;

const ReviewerImage = styled.img`
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    margin-bottom: 3.5rem;
`;

const ReviewerName = styled.h4`
    color: #311f09;
    font-weight: 600;
    font-size: 3rem;
    line-height: 6rem;
`;
const ReviewerOccupation = styled.h5`
    color: #311f09;
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const ReviewText = styled.p`
    color: #311f09;
    font-weight: 400;
    font-size: 2rem;
    line-height: 4rem;
`;

const Testimonial = (props) => {
    return (
        <TestimonialWrapper>
            <ReviewerImage src={props.img} alt={props.name} />
            <ReviewerName>{props.name}</ReviewerName>
            <ReviewerOccupation>{props.occupation}</ReviewerOccupation>
            <ReviewText>{props.review}</ReviewText>
        </TestimonialWrapper>
    );
};

export default Testimonial;
