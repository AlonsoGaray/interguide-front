/* eslint-disable jsx-a11y/anchor-is-valid */
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
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
            to help programmers is search of a job. Interguide focuses on
            building a community of users that provide the most frequent
            questions they had been asked in a job interview. We will help
            programmers in different programming languages but for now we only
            include HTML, CSS, JavaScript and, React.
          </p>
        </AboutContainer>
        <DoubleContainer>
          <CompaniesContainer>
            <h6>Categories</h6>
            <UlLinks>
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </UlLinks>
          </CompaniesContainer>

          <LinksContainer>
            <h6>Quick Links</h6>
            <UlLinks>
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
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
