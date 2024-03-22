import styled from "styled-components";

const Image = styled.img`
    width: 6rem;
    height: 6rem;

    &:hover {
        cursor: pointer;
    }
`;

const SocialMedia = (props) => {
    return <Image src={props.imgSrc} alt={props.alt} />;
};

export default SocialMedia;
