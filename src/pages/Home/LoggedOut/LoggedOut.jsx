/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HowToSection,
  HowToBox,
  CallContainer,
  LeftCallContainer,
  RightCallContainer,
} from './styled';
import banner from '../../../img/Banner.jpg';
import coding from '../../../img/Coding.jpg';

const LoggedOut = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img className="banner" src={banner} alt="" />
      <a
        target="_blank"
        href="https://www.freepik.com/vectors/technology"
        rel="noreferrer"
      >
        Technology vector by @pikisuperstar
      </a>
      <HowToSection>
        <HowToBox>
          <div className="svg">
            <LoginIcon />
          </div>
          <h2>Join</h2>
          <p>
            Sign up to the best community built to help programmers pass their
            interviews
          </p>
        </HowToBox>

        <HowToBox>
          <div className="svg">
            <PeopleIcon />
          </div>
          <h2>Community</h2>
          <p>
            Help posting questions or answering them, or just read and practice
            for your incoming interview
          </p>
        </HowToBox>

        <HowToBox>
          <div className="svg">
            <ThumbUpIcon />
          </div>
          <h2>Practice</h2>
          <p>
            Take tests for your desired company/companies and rate the questions
            that you feel it helped you the most. (Tests coming soon)
          </p>
        </HowToBox>
      </HowToSection>

      <CallContainer>
        <LeftCallContainer>
          <img alt="" src={coding} />
          <a
            target="_blank"
            href="https://www.freepik.com/vectors/background"
            rel="noreferrer"
          >
            Background vector by @macrovector
          </a>
        </LeftCallContainer>

        <RightCallContainer>
          <h3>Build for programmers by programmers</h3>
          <p>
            Focused on building a community of developers that wants to help
            each other by posting, their most frequent asked questions in
            interviews, and answering those that need help. We offer the
            possibility of taking tests for your desired company/companies so
            you can see if you are ready or need to practice more before your
            interview (Tests coming soon).
          </p>
          <button type="button" onClick={() => navigate('/register')}>
            SIGN UP
          </button>
        </RightCallContainer>
      </CallContainer>
    </Container>
  );
};

export default LoggedOut;
