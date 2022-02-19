import styled from 'styled-components';

const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 20px;
  margin-top: 10px;
  border-top: thin solid gray;
  color: #33353d;

  h6 {
    color: #33353d;
    margin: 20px 0;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  a {
    color: #33353d;
  }

  a:hover {
    color: #3366cc;
    text-decoration: none;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
  }
`;

const AboutContainer = styled.div`
  display: :flex;
  text-align: center;
  max-width: 90vw;

  p {
    text-align: justify;
    text-justify: inter-word;
  }

  @media (min-width: 1025px) {
    max-width: 640px;
  }
`;

const DoubleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90vw;

  @media (min-width: 1025px) {
    width: 37vw;
  }
`;

const CompaniesContainer = styled.div`
  display: :flex;
  flex-direction: column;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UlLinks = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0 0 10px 0;
  padding: 0;
  a {
    color: #33353d;
  }
  a:link {
    text-decoration: none;
  }
  a:active,
  a:focus,
  a:hover {
    color: #3366cc;
    text-decoration: none;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const CopyRightContainer = styled.div`
  @media (min-width: 769px) {
    margin-left: 50px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    margin-right: 50px;
  }
`;

const UlIcons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }

  a {
    background-color: #33353d;
    color: #eceeef;
    font-size: 16px;
    display: inline-block;
    line-height: 55px;
    width: 44px;
    height: 44px;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  a:active,
  a:focus,
  a:hover {
    color: #fff;
    background-color: #29aafe;
  }

  a.facebook:hover {
    background-color: #3b5998;
  }

  a.twitter:hover {
    background-color: #00aced;
  }

  a.instagram:hover {
    background-color: #ea4c89;
  }
`;

export {
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
};
