import Button from "../../../../design-system/Button/Button";
import { OrangeSpanText, SectionHeading } from "../../../components/layout";
import Chef from "./Chef";
import styled from "styled-components";
import currentChefs from "./currentChefs";

const ChefsSection = styled.section`
    text-align: center;
`;

const ChefsSectionContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 15rem 5rem;
`;

const ChefsWrapper = styled.div`
    display: flex;
    gap: 4rem;
    margin-bottom: 15rem;
`;

const Chefs = () => {
    return (
        <ChefsSection id="chefs-section">
            <ChefsSectionContainer>
                <SectionHeading $marginBottom="5">
                    Our Greatest <OrangeSpanText>Chefs</OrangeSpanText>
                </SectionHeading>
                <ChefsWrapper>
                    {currentChefs.map((chef, idx) => {
                        return (
                            <Chef
                                key={idx}
                                img={chef.img}
                                alt={chef.name}
                                name={chef.name}
                                title={chef.title}
                                backgroundColor={chef.backgroundColor}
                            />
                        );
                    })}
                </ChefsWrapper>
                <Button size="lg" color="orange">
                    View All
                </Button>
            </ChefsSectionContainer>
        </ChefsSection>
    );
};

export default Chefs;
