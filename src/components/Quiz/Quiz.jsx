import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  AnswersContainer,
  QuestionContainer,
  ScoreContainer,
} from './styled';

const Quiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
      questionText: 'JavaScript File Has An Extension of:',
      answerOptions: [
        { answerText: '.java', isCorrect: false },
        { answerText: '.javascript', isCorrect: false },
        { answerText: '.js', isCorrect: true },
        { answerText: '.jsx', isCorrect: false },
      ],
    },
    {
      questionText:
        'In React what is used to pass data to a component from outise?',
      answerOptions: [
        { answerText: 'setState', isCorrect: false },
        { answerText: 'props', isCorrect: true },
        { answerText: 'PropTypes', isCorrect: false },
        { answerText: 'useEffect', isCorrect: false },
      ],
    },
    {
      questionText: 'Everything in React is a _____',
      answerOptions: [
        { answerText: 'Component', isCorrect: true },
        { answerText: 'Module', isCorrect: false },
        { answerText: 'Package', isCorrect: false },
        { answerText: 'Class', isCorrect: false },
      ],
    },
    {
      questionText: 'What is ReactJS?',
      answerOptions: [
        { answerText: 'Server-side Framework', isCorrect: false },
        { answerText: 'User-interface Framework', isCorrect: false },
        {
          answerText: 'A Library for building interaction interfaces',
          isCorrect: true,
        },
        { answerText: 'Non of the avobe', isCorrect: false },
      ],
    },
    {
      questionText:
        'What port is the default where the webpack-dev-server will run?',
      answerOptions: [
        { answerText: '3306', isCorrect: false },
        { answerText: '8080', isCorrect: false },
        {
          answerText: '3001',
          isCorrect: false,
        },
        { answerText: '3000', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container>
      {showScore ? (
        <ScoreContainer>
          <div className="score-section">
            <p>
              You scored {score} out of {questions.length}
            </p>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => window.location.reload()}>
              Test Again
            </button>
            <button type="button" onClick={() => navigate('/')}>
              Go Home
            </button>
          </div>
        </ScoreContainer>
      ) : (
        <>
          <QuestionContainer>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </QuestionContainer>

          {!showAnswer ? (
            <AnswersContainer>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  type="button"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </AnswersContainer>
          ) : (
            <AnswersContainer>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className={`answer-${answerOption.isCorrect}`}
                  key={answerOption.answerText}
                  type="button"
                >
                  {answerOption.answerText}
                </button>
              ))}
              <button
                className="next-question"
                type="button"
                onClick={() => handleNextQuestion()}
              >
                Next Question
              </button>
            </AnswersContainer>
          )}
        </>
      )}
    </Container>
  );
};

export default Quiz;
