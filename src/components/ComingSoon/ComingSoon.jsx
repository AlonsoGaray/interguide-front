/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  Container,
  SubContainer,
  Logo,
  IconContainer,
  UlIcons,
} from './styled';

const ComingSoon = ({ page }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <SubContainer>
        <Logo onClick={() => navigate(-1)}>interguide</Logo>
        <h2>{page} Section</h2>
        <h3>Coming Soon</h3>
        <button type="button" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <IconContainer className="asdasd">
          <UlIcons>
            <li>
              <a
                className="facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FacebookRoundedIcon />
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
            <li>
              <a
                className="telegram"
                href="https://telegram.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TelegramIcon />
              </a>
            </li>
          </UlIcons>
        </IconContainer>
      </SubContainer>
    </Container>
  );
};

export default ComingSoon;
