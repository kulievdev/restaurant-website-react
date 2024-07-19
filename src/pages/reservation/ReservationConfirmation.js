import styled from "styled-components";
import Button from "../../design-system/Button/Button";
import Logo from "../../design-system/Logo/Logo";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import MobileNavCta from "../../design-system/MobileNavCta/MobileNavCta";
import Cart from "../../design-system/Cart/Cart";
import { useState } from "react";
import PreConfirmation from "./PreConfirmationReservation";
import PostConfirmation from "./PostConfirmation";
import CancelConfirmation from "./CancelConfirmation";

const ConfirmationWrapper = styled.div``;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
`;

const CtaWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const ReservationConfirmation = ({ closeModal, details }) => {
    const navigate = useNavigate();
    const windowWidth = useWindowWidth();
    const [preConfirmation, setPreConfirmation] = useState(true);
    const [postConfirmation, setPostConfirmation] = useState(false);
    const [cancelConfirmation, setCancelConfirmation] = useState(false);

    return (
        <ConfirmationWrapper>
            <Navbar>
                <Logo type="white" />
                <CtaWrapper>
                    {windowWidth < 850 ? (
                        <>
                            <Cart />
                            <MobileNavCta />
                        </>
                    ) : (
                        <>
                            <Button
                                size="md"
                                color="orange"
                                onClick={() => {
                                    navigate("/login");
                                }}
                            >
                                Sign in
                            </Button>
                            <Button
                                size="md"
                                color="green"
                                onClick={() => {
                                    navigate("/sign-up");
                                }}
                            >
                                Sign up
                            </Button>
                        </>
                    )}
                </CtaWrapper>
            </Navbar>
            {preConfirmation && (
                <PreConfirmation
                    setPreConfirmation={setPreConfirmation}
                    setPostConfirmation={setPostConfirmation}
                    details={details}
                />
            )}
            {postConfirmation && (
                <PostConfirmation
                    setPostConfirmation={setPostConfirmation}
                    setCancelConfirmation={setCancelConfirmation}
                    details={details}
                />
            )}
            {cancelConfirmation && (
                <CancelConfirmation closeModal={closeModal} details={details} />
            )}
        </ConfirmationWrapper>
    );
};

export default ReservationConfirmation;
