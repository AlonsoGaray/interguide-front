/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import socket from '../../utils/socket';
import { getQuestionById, patchQuestion } from '../../store/actions';
import {
  Container,
  TopLeftContainer,
  TopRightContainer,
  BottomContainer,
  TopContainer,
  AnswersContainer,
  NewAnswerContainer,
} from './styled';
import Loader from '../Loader';

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const questionById = useSelector((state) => state.questionById);

  const [questionSocket, setQuestionSocket] = useState([]);
  const [newAnswer, setNewAnser] = useState('');

  const form = {
    userId: user.id,
    description: newAnswer,
    questionId: id,
  };

  useEffect(() => {
    const getQuestion = async () => {
      await getQuestionById(dispatch, id);
    };
    getQuestion();
  }, []);

  useEffect(() => {
    setQuestionSocket(questionById);
  }, [questionById]);

  useEffect(() => {
    socket.on('question:update', (question) => {
      setQuestionSocket(question);
    });

    return () => {
      socket.off('question:update');
    };
  }, []);

  const onClick = async (e) => {
    e.preventDefault();
    await patchQuestion(dispatch, form);
    await getQuestionById(dispatch, id);
  };

  return (
    <Container>
      {questionSocket.length !== 0 ? (
        <>
          <TopContainer>
            <TopLeftContainer>
              <h2>{questionSocket.question}</h2>
              <p>
                Posted by: {questionSocket.firstName} {questionSocket.lastName}
              </p>
            </TopLeftContainer>
            <TopRightContainer>
              <p>Answers: {questionSocket.answers.length}</p>
              <p>Votes: {questionSocket.vote}</p>
              <p>Company: {questionSocket.company}</p>
            </TopRightContainer>
          </TopContainer>
          <BottomContainer>
            <AnswersContainer>
              {questionSocket.answers.map((answer) => (
                <div
                  className="answer"
                  key={answer._id}
                  dangerouslySetInnerHTML={{
                    __html: answer.description,
                  }}
                />
              ))}
            </AnswersContainer>

            <NewAnswerContainer>
              <p>Submit your answer</p>
              <Editor
                apiKey={process.env.REACT_APP_TINY_MCE}
                init={{
                  placeholder: 'Type Your Answer Here',
                  height: 300,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                    'codesample',
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help ' +
                    'codesample',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
                onEditorChange={(content) => {
                  setNewAnser(content);
                }}
              />
              <button type="submit" onClick={onClick}>
                Submit
              </button>
            </NewAnswerContainer>
          </BottomContainer>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default QuestionDetail;
