import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  outline: 1px solid #737373;

  @media (min-width: 768px) {
    margin: 0;
    outline: 0;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #737373;

  p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    padding: 5px 0;
    flex-direction: row;
  }
`;

const TopLeftContainer = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h2 {
    margin: 0;
    font-size: 27px;
    color: #33353d;
  }

  p {
    margin: 10px 0;
    font-size: 12px;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .active {
    color: rgb(10, 149, 255);
  }

  svg {
    width: 40px;
    height: 40px;
    pointer-events: none;
  }
`;

const TopRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 5px;
  justify-content: center;

  p {
    margin: 8px;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    width: 25%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;

  .answer {
    padding: 0 30px;

    p {
      margin: 10px 0;
    }
  }
`;

const SingleAnswerContainer = styled.div`
  padding: 5px 0;
  margin: 10px;
  outline: 1px solid #737373;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const NewAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 10px;
  outline: 1px solid #737373;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  p {
    font-size: 20px;
    margin: 20px 0;
  }

  button {
    width: 100px;
    height: 50px;
    margin: 15px auto;
    font-size: 18px;
    color: white;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(10, 149, 255);

    &:hover {
      background-color: #0074cc;
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
      background-color: gray;
      box-shadow: none;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;

  p {
    font-size: 13px;
    margin-left: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 100%;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  Container,
  TopLeftContainer,
  TopRightContainer,
  BottomContainer,
  TopContainer,
  AnswersContainer,
  NewAnswerContainer,
  InfoContainer,
  SingleAnswerContainer,
  VoteContainer,
};
