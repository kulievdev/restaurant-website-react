import styled from "styled-components";

const NoteWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 2rem;
    background-color: #fef9c3;
`;

const NoteReminder = styled.strong`
    color: red;
    font-size: 2rem;
    font-weight: 700;
`;

const NoteText = styled.p`
    color: #374151;
    font-size: 1.4rem;
    font-weight: 600;
`;

const Note = () => {
    return (
        <NoteWrapper>
            <NoteReminder>Note: </NoteReminder>
            <NoteText>
                This site is fully responsive. It will be fully functional soon
                along with other pages.
            </NoteText>
        </NoteWrapper>
    );
};

export default Note;
