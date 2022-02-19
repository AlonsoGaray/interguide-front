/* eslint-disable jsx-a11y/anchor-is-valid */
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import {
  FooterCont,
  TopContainer,
  AboutContainer,
  DoubleContainer,
  CompaniesContainer,
  LinksContainer,
  UlLinks,
  BottomContainer,
  CopyRightContainer,
  IconContainer,
  UlIcons,
} from './styled';

const Footer = () => {
  return (
    <FooterCont>
      <TopContainer>
        <AboutContainer>
          <h6>About</h6>
          <p>
            Interguide.com <i>THE ONLY GUIDE YOU WILL NEED</i> is an initiative
            to help programmers in looking for a job. Interguide focuses on
            building a community of programmers that provide the most frequent
            questions they had been asked in a job interview.
          </p>
        </AboutContainer>
        <DoubleContainer>
          <CompaniesContainer>
            <h6>Categories</h6>
            <UlLinks>
              <li>
                <Link to="/tags">JavaScript</Link>
              </li>
              <li>
                <Link to="/tags">HTML</Link>
              </li>
              <li>
                <Link to="/tags">React</Link>
              </li>
              <li>
                <Link to="/tags">Java</Link>
              </li>
            </UlLinks>
          </CompaniesContainer>

          <LinksContainer>
            <h6>Quick Links</h6>
            <UlLinks>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/contribute">Contribute</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </UlLinks>
          </LinksContainer>
        </DoubleContainer>
      </TopContainer>
      <div
        style={{
          borderTop: '2px solid #737373',
          marginLeft: 10,
          marginRight: 10,
        }}
      />
      <BottomContainer>
        <CopyRightContainer>
          <p>
            Copyright &copy; 2022 All Rights Reserved by&nbsp;
            <a
              href="https://github.com/AlonsoGaray"
              target="_blank"
              rel="noreferrer noopener"
            >
              Alonso Garay
            </a>
            .
          </p>
        </CopyRightContainer>

        <IconContainer>
          <UlIcons>
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                className="twitter"
                href="https://twitter.com/home"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <InstagramIcon />
              </a>
            </li>
          </UlIcons>
        </IconContainer>
      </BottomContainer>
    </FooterCont>
  );
};
export default Footer;
