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

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const questionById = useSelector((state) => state.questionById);

  useEffect(() => {
    const getQuestions = async () => {
      await getQuestionById(dispatch, id);
    };
    getQuestions();
  }, []);

  return (
    <Container>
      <TopContainer>
        <TopLeftContainer>
          <h2>{questionById.question}</h2>
          <p>
            Posted by: {questionById.firstName} {questionById.lastName}
          </p>
        </TopLeftContainer>
        <TopRightContainer>
          <p>Answer: {questionById.answer}</p>
          <p>Votes: {questionById.vote}</p>
          <p>Company: {questionById.company}</p>
        </TopRightContainer>
      </TopContainer>

      <BottomContainer>
        <p>{questionById.answer}</p>
      </BottomContainer>
    </Container>
  );
};

export default QuestionDetail;
