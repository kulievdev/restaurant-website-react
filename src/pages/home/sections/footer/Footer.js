import logo from "../../../../assets/logo-dark.svg";
import styled from "styled-components";
import mySocials from "./mySocials";
import SocialMedia from "./SocialMedia";
import { SectionContainer } from "../../../components/layout";
import Logo from "../../../../design-system/Logo/Logo";

const FooterSection = styled.footer`
    background-color: #311f09;
`;

const FooterSectionContainer = styled(SectionContainer)``;

const FooterContent = styled.div`
    margin-bottom: 14rem;

    @media (min-width: 1150px) {
        display: flex;
        justify-content: space-between;
    }
`;

const BrandWrapper = styled.div`
    width: 100%;
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1150px) {
        width: 30%;
    }
`;

const FooterText = styled.p`
    margin-top: 2.5rem;
    color: #e3e2e0;
    font-size: 1.6rem;
    line-height: 3.5rem;

    @media (min-width: 1620px) {
        font-size: 2rem;
        line-height: 4rem;
    }
`;

const SocialMediasWrapper = styled.div`
    display: flex;
    gap: 3rem;
    margin-top: 4rem;
`;

const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 1150px) {
        gap: 7rem;
    }
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const NavHeading = styled.h4`
    color: #ff8a00;
    font-size: 2.2rem;
    line-height: 4.2;

    @media (min-width: 1620px) {
        font-size: 2.8rem;
        line-height: 5rem;
    }
`;

const Link = styled.a`
    color: #e3e2e0;
    font-size: 1.6rem;
    line-height: 3.5rem;

    @media (min-width: 1620px) {
        font-size: 2rem;
        line-height: 4rem;
    }
`;

const CopyrightText = styled(FooterText)`
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterSection id="footer">
            <FooterSectionContainer>
                <FooterContent>
                    <BrandWrapper>
                        <Logo type="black" />
                        <FooterText className="footer__text">
                            Taste the Difference, Explore Our Menu and Stay
                            Connected. Follow Us on Social Media for Updates,
                            Specials, and More!
                        </FooterText>
                        <SocialMediasWrapper>
                            {mySocials.map((social, idx) => {
                                return (
                                    <SocialMedia
                                        key={idx}
                                        imgSrc={social.imgSrc}
                                        alt={social.name}
                                    />
                                );
                            })}
                        </SocialMediasWrapper>
                    </BrandWrapper>
                    <NavigationWrapper>
                        <Navigation>
                            <NavHeading>Page</NavHeading>
                            <Link href="">Home</Link>
                            <Link href="">Menu</Link>
                            <Link href="">Order Online</Link>
                            <Link href="">Catering</Link>
                            <Link href="">Reservation</Link>
                        </Navigation>
                        <Navigation>
                            <NavHeading className="footer__heading">
                                Information
                            </NavHeading>
                            <Link href="">About us</Link>
                            <Link href="">Testimonial</Link>
                            <Link href="">Event</Link>
                        </Navigation>
                        <Navigation className="footer__contact">
                            <NavHeading className="footer__heading">
                                Get In Touch
                            </NavHeading>
                            <Link>
                                3247 Johnson Ave, <br />
                                New York, NY 10063
                            </Link>
                            <Link href="mailto:Luce Notte@gmail.com">
                                Luce Notte@gmail.com
                            </Link>
                            <Link
                                href="tel:347-567-2828"
                                className="footer__text"
                            >
                                222-222-2222
                            </Link>
                        </Navigation>
                    </NavigationWrapper>
                </FooterContent>
                <CopyrightText>Copyright &copy; 2023 Luce Notte</CopyrightText>
            </FooterSectionContainer>
        </FooterSection>
    );
};

export default Footer;
