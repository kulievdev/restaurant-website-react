import logo from "../../../../assets/logo-dark.svg";
import styled from "styled-components";
import mySocials from "./mySocials";
import SocialMedia from "./SocialMedia";
import { SectionContainer } from "../../../components/layout";

const FooterSection = styled.footer`
    background-color: #311f09;
`;

const FooterSectionContainer = styled(SectionContainer)``;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14rem;
`;

const BrandWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FooterLogo = styled.img`
    margin-bottom: 2.5rem;
    width: 14rem;
`;

const FooterText = styled.p`
    color: #e3e2e0;
    font-size: 2rem;
    line-height: 4rem;
`;

const SocialMediasWrapper = styled.div`
    display: flex;
    gap: 3rem;
    margin-top: 4rem;
`;

const NavigationWrapper = styled.div`
    display: flex;
    gap: 7rem;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const NavHeading = styled.h4`
    color: #ff8a00;
    font-size: 2.5rem;
    line-height: 5rem;
`;

const Link = styled.a`
    color: #e3e2e0;
    font-size: 2rem;
    line-height: 4rem;
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
                        <FooterLogo src={logo} alt="Logo" />
                        <FooterText className="footer__text">
                            Viverra gravida morbi egestas facilisis tortor netus
                            non duis tempor.
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
                            <FooterText>
                                3247 Johnson Ave, <br />
                                Bronx, NY 10463
                            </FooterText>
                            <Link href="mailto:delizioso@gmail.com">
                                delizioso@gmail.com
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
                <CopyrightText>Copyright &copy; 2023 DeliziOso</CopyrightText>
            </FooterSectionContainer>
        </FooterSection>
    );
};

export default Footer;
