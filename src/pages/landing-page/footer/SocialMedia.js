import styled from "styled-components";

const Image = styled.img`
    width: 6rem;
    height: 6rem;

    &:hover {
        cursor: pointer;
    }
`;

const SocialMedia = (props) => {
    return (
        <a href={props.link} rel="noreferrer" target="_blank">
            <Image src={props.imgSrc} alt={props.alt} />
        </a>
    );
};

export default SocialMedia;
