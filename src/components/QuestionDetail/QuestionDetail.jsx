/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionById } from '../../store/actions';
import {
  Container,
  TopLeftContainer,
  TopRightContainer,
  BottomContainer,
  TopContainer,
} from './styled';
import Loader from '../Loader';

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const questionById = useSelector((state) => state.questionById);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        if (questionById.length < 1 || questionById.length === undefined) {
          getQuestionById(dispatch, id);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    getQuestion();
  }, []);

  return (
    <Container>
      {questionById.length !== 0 ? (
        <>
          <TopContainer>
            <TopLeftContainer>
              <h2>{questionById.question}</h2>
              <p>
                Posted by: {questionById.firstName} {questionById.lastName}
              </p>
            </TopLeftContainer>
            <TopRightContainer>
              <p>Answers: {questionById.answers.length}</p>
              <p>Votes: {questionById.vote}</p>
              <p>Company: {questionById.company}</p>
            </TopRightContainer>
          </TopContainer>
          <BottomContainer>
            {questionById.answers.map((answer) => (
              <div
                key={answer._id}
                dangerouslySetInnerHTML={{
                  __html: answer.description,
                }}
              />
            ))}
          </BottomContainer>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default QuestionDetail;
