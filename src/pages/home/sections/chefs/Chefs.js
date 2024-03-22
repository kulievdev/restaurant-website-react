import chef1 from "../../../../assets/betran.png";
import chef2 from "../../../../assets/ferry.png";
import chef3 from "../../../../assets/iswan.png";
import Button from "../../../../design-system/Button/Button";
import Chef from "./Chef";
import styled from "styled-components";

const ChefsSection = styled.section`
    text-align: center;
`;

const ChefsSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const ChefsHeading = styled.h2`
    font-size: 6rem;
    line-height: 7rem;
    color: #311f09;
    margin-bottom: 5rem;
`;

const ChefsSpanText = styled.span`
    color: #ff8a00;
`;

const ChefsWrapper = styled.div`
    display: flex;
    gap: 4rem;
    margin: 8rem;
`;

const Chefs = () => {
    return (
        <ChefsSection id="chefs-section">
            <ChefsSectionContainer>
                <ChefsHeading>
                    Our Greatest <ChefsSpanText>Chefs</ChefsSpanText>
                </ChefsHeading>
                <ChefsWrapper>
                    <Chef
                        img={chef2}
                        name="Ferry Sauwi"
                        title="Chef"
                        backgroundColor="#d1d0d2"
                    />
                    <Chef
                        img={chef1}
                        name="Betran Komar"
                        title="Head Chef"
                        backgroundColor="#ffe8cc"
                    />
                    <Chef
                        img={chef3}
                        name="Iswan Dracho"
                        title="Chef"
                        backgroundColor="#eae0d9"
                    />
                </ChefsWrapper>
                <Button size="lg" color="orange">
                    View All
                </Button>
            </ChefsSectionContainer>
        </ChefsSection>
    );
};

export default Chefs;
