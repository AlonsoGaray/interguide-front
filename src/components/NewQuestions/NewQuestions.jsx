/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../utils/socket';
import { Container, TopContainer, QuestionsContainer } from './styled';
import { getQuestionsFromDB } from '../../store/actions';
import Loader from '../Loader';

const NewQuestions = () => {
  const questions = useSelector((state) => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questionsSocket, setQuestionsSocket] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        if (questions.length < 1 || questions.length === undefined) {
          getQuestionsFromDB(dispatch);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    getQuestions();
    setQuestionsSocket(questions);
  }, [questions]);

  useEffect(() => {
    socket.on('question:create', (data) => {
      setQuestionsSocket([...questionsSocket, data]);
    });

    return () => {
      socket.off('question:create');
    };
  }, [questionsSocket, questions]);

  return (
    <Container>
      <TopContainer>
        <p>New Questions</p>
        <button type="button" onClick={() => navigate('/post-question')}>
          Post a Question
        </button>
      </TopContainer>
      <QuestionsContainer>
        {questionsSocket.length > 0 ? (
          questionsSocket.map((q) => <p key={q._id}>{q.question}</p>)
        ) : (
          <Loader />
        )}
      </QuestionsContainer>
    </Container>
  );
};

export default NewQuestions;
