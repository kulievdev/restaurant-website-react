import styled from "styled-components";
import mySocials from "./mySocials";
import SocialMedia from "./SocialMedia";
import { SectionContainer } from "../../components/layout";
import Logo from "../../../design-system/Logo/Logo";
import { NavLink } from "react-router-dom";

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

const ALink = styled.a`
    color: #e3e2e0;
    font-size: 1.6rem;
    line-height: 3.5rem;

    @media (min-width: 1620px) {
        font-size: 2rem;
        line-height: 4rem;
    }
`;

const Link = styled(NavLink)`
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
                                        link={social.link}
                                        alt={social.name}
                                    />
                                );
                            })}
                        </SocialMediasWrapper>
                    </BrandWrapper>
                    <NavigationWrapper>
                        <Navigation>
                            <NavHeading>Page</NavHeading>
                            <Link to="/">Home</Link>
                            <Link to="menu">Menu</Link>
                            <Link>Order Online</Link>
                            <Link>Catering</Link>
                            <Link to="reservation">Reservation</Link>
                        </Navigation>
                        <Navigation>
                            <NavHeading className="footer__heading">
                                Information
                            </NavHeading>
                            <Link to="about-us">About us</Link>
                            <Link>Testimonial</Link>
                            <Link>Event</Link>
                        </Navigation>
                        <Navigation className="footer__contact">
                            <NavHeading className="footer__heading">
                                Get In Touch
                            </NavHeading>
                            <ALink
                                target="_blank"
                                href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                            >
                                205 Allen St, New York, NY 10002, USA
                            </ALink>
                            <ALink href="mailto:Luce Notte@gmail.com">
                                Luce Notte@gmail.com
                            </ALink>
                            <ALink
                                href="tel:347-567-2828"
                                className="footer__text"
                            >
                                222-222-2222
                            </ALink>
                        </Navigation>
                    </NavigationWrapper>
                </FooterContent>
                <CopyrightText>Copyright &copy; 2023 Luce Notte</CopyrightText>
            </FooterSectionContainer>
        </FooterSection>
    );
};

export default Footer;
