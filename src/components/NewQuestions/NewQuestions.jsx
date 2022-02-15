/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, TopContainer, QuestionsContainer } from './styled';
import { getQuestionsFromDB } from '../../store/actions';
import Loader from '../Loader';

const NewQuestions = () => {
  const questions = useSelector((state) => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        if (questions.length < 1) {
          getQuestionsFromDB(dispatch);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    getQuestions();
  }, []);

  return (
    <Container>
      <TopContainer>
        <p>New Questions</p>
        <button type="button" onClick={() => navigate('/post-question')}>
          Post a Question
        </button>
      </TopContainer>
      <QuestionsContainer>
        {questions.length > 0 ? (
          questions.map((q) => <p key={q._id}>{q.question}</p>)
        ) : (
          <Loader />
        )}
      </QuestionsContainer>
    </Container>
  );
};

export default NewQuestions;
