/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../utils/socket';
import {
  Container,
  TopContainer,
  QuestionsContainer,
  SingleContainer,
  RightSingleContainer,
  LeftSingleContainer,
} from './styled';
import { getQuestionsFromDB } from '../../store/actions';
import Loader from '../Loader';

const NewQuestions = () => {
  const questions = useSelector((state) => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questionsSocket, setQuestionsSocket] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      await getQuestionsFromDB(dispatch);
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
        <p className="title">New Questions</p>
        <button type="button" onClick={() => navigate('/post-question')}>
          Post a Question
        </button>
      </TopContainer>
      <QuestionsContainer>
        {questionsSocket.length > 0 ? (
          questionsSocket.map((q) => (
            <SingleContainer key={q._id}>
              <LeftSingleContainer>
                <span>
                  <Link to={`/question/${q._id}`}>{q.question}</Link>
                </span>
                <div className="tags">
                  {q.tag.map((tag) => (
                    <p className="tag" key={tag._id}>
                      {tag.name}
                    </p>
                  ))}
                </div>
              </LeftSingleContainer>
              <RightSingleContainer>
                <p>Answers: {q.answers.length}</p>
                <p>Votes: {q.vote}</p>
                <p>Company: {q.company}</p>
              </RightSingleContainer>
            </SingleContainer>
          ))
        ) : (
          <Loader />
        )}
      </QuestionsContainer>
    </Container>
  );
};

export default NewQuestions;
