import Button from "../../../../design-system/Button/Button";
import {
    OrangeSpanText,
    SectionContainer,
    SectionHeading
} from "../../../components/layout";
import Chef from "./Chef";
import styled from "styled-components";
import currentChefs from "./currentChefs";

const ChefsSection = styled.section`
    text-align: center;
`;

const ChefsSectionContainer = styled(SectionContainer)``;

const ChefsWrapper = styled.div`
    display: flex;
    gap: 8rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15rem;

    @media (min-width: 1000px) {
        gap: 0;
    }
`;

const Chefs = () => {
    return (
        <ChefsSection id="chefs-section">
            <ChefsSectionContainer>
                <SectionHeading $marginBottom="13.5">
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
