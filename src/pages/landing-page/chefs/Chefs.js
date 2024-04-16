import Button from "../../../design-system/Button/Button";
import {
    OrangeSpanText,
    SectionContainer,
    SectionHeading
} from "../../components/layout";
import Chef from "./Chef";
import styled from "styled-components";
import { currentChefs, otherChefs } from "./currentChefs";
import useWindowWidth from "../../../custom-hooks/useWindowWidth";
import { useState } from "react";

const ChefsSection = styled.section`
    text-align: center;
`;

const ChefsSectionContainer = styled(SectionContainer)``;

const ChefsWrapper = styled.div`
    display: flex;
    gap: 8rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10rem;

    @media (min-width: 1000px) {
        gap: 4rem;
    }
`;

const Chefs = () => {
    const windowWidth = useWindowWidth();
    const [seeMore, setSeeMore] = useState(false);

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
                    {seeMore &&
                        otherChefs.map((chef, idx) => {
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

                <Button
                    size={
                        windowWidth > 1620
                            ? "lg"
                            : windowWidth > 400
                            ? "md"
                            : "sm"
                    }
                    color="orange"
                    onClick={() => {
                        setSeeMore(!seeMore);
                    }}
                >
                    {seeMore ? "Hide" : "View all"}
                </Button>
            </ChefsSectionContainer>
        </ChefsSection>
    );
};

export default Chefs;
