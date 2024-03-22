import styled from "styled-components";

const Image = styled.img`
    width: 6rem;
    height: 6rem;
`;

const SocialMedia = (props) => {
    return <Image src={props.imgSrc} alt={props.alt} />;
};

export default SocialMedia;
