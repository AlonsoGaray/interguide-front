import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 155, 188, 1) 0%,
    rgba(2, 58, 78, 1) 100%
  );
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 350px;
  font-size: 28px;

  .score-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 350px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;

    button {
      width: 140px;
      height: 60px;
      border-radius: 15px;
      border: 3px solid white;
      box-shadow: inset 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
      color: #ffffff;
      background: transparent;
      font-size: 22px;

      &:hover {
        box-shadow: none;
        cursor: pointer;
      }
    }
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 20%;
  width: 90%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 155, 188, 1) 0%,
    rgba(2, 58, 78, 1) 100%
  );
  border-radius: 15px;
  border: 3px solid white;
  box-shadow: inset 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  color: #ffffff;
  font-size: 20px;

  .question-count {
    margin-bottom: 20px;
  }

  .question-count span {
    font-size: 28px;
  }

  .question-text {
    margin: 0 10px;
    margin-bottom: 12px;
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  width: 90%;
  height: 350px;

  button {
    width: 100%;
    height: 60px;
    margin-top: 10px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 155, 188, 1) 0%,
      rgba(2, 58, 78, 1) 100%
    );
    color: #ffffff;
    box-shadow: inset 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    border: 3px solid white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 15px;

    &:hover {
      box-shadow: none;
      cursor: pointer;
    }
  }

  .answer-true:hover,
  .answer-false:hover {
    box-shadow: inset 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
    cursor: default;
  }

  .answer-false {
    border: 3px solid red;
  }

  .answer-true {
    border: 3px solid green;
  }

  .next-question {
    width: 120px;
    margin-left: auto;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
 AnswersContainer, Container, QuestionContainer, ScoreContainer
};
