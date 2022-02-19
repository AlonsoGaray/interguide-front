import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .banner {
    width: 100%;

    @media (min-width: 769px) {
      height: 600px;
    }
  }

  a {
    display: inline-block;
    text-align: right;
    text-decoration: none;
    color: black;
    margin-right: 10px;
    font-size: 12px;

    &:hover {
      color: rgb(10, 149, 255);
    }
  }
`;

const HowToSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .svg {
    display: flex;
    background-color: #e5e5e5;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;

    svg {
      width: 60px;
      height: 60px;
      color: rgb(10, 149, 255);
    }
  }

  @media (min-width: 769px) {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const HowToBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 310px;
  height: 360px;
  outline: 2px solid #ddd;
  font-size: 14px;

  h2 {
    font-size: 24px;
    margin-top: 20px;
    color: rgb(21, 25, 72);
  }

  p {
    margin-top: 20px;
    width: 75%;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    color: rgb(51, 53, 61);
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    outline: 2px solid rgb(10, 149, 255);
  }

  @media (min-width: 769px) {
    margin-top: 70px;
  }
`;

const CallContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftCallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 49%;
  }
`;

const RightCallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  h3 {
    width: 90%;
    text-align: center;
    font-size: 35px;
    color: rgb(21, 25, 72);
  }

  p {
    width: 90%;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    margin-top: 20px;
    font-size: 18px;
    line-height: 26px;
    color: rgb(51, 53, 61);
    text-align: justify;
  }

  button {
    margin-top: 20px;
    height: 55px;
    width: 150px;
    background-color: rgb(10, 149, 255);
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: 0.2px solid gray;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: #0074cc;
    }
  }

  @media (min-width: 768px) {
    width: 49%;
    margin-top: 0;

    h3 {
      width: 100%;
      text-align: left;
    }

    button {
      margin-right: auto;
      margin-top: 30px;
    }

    p {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  Container,
  HowToSection,
  HowToBox,
  CallContainer,
  LeftCallContainer,
  RightCallContainer,
};
