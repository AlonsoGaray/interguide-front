/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector, useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import socket from '../../utils/socket';
import {
  getQuestionById,
  patchQuestion,
  getUsersById,
  upVoteQuestion,
  downVoteQuestion,
} from '../../store/actions';
import {
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
} from './styled';
import Loader from '../Loader';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const QuestionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const usersById = useSelector((state) => state.usersById);
  const questionById = useSelector((state) => state.questionById);

  const [questionSocket, setQuestionSocket] = useState([]);
  const [newAnswer, setNewAnser] = useState('');

  const handleUpVote = async (e, questionID) => {
    e.preventDefault();
    const data = {
      questionID,
      userId: user.id,
    };
    await upVoteQuestion(dispatch, data);
  };

  const handleDownVote = async (e, questionID) => {
    e.preventDefault();
    const data = {
      questionID,
      userId: user.id,
    };
    await downVoteQuestion(dispatch, data);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  const form = {
    userId: user.id,
    description: newAnswer,
    questionId: id,
  };
  function unique(val, i, self) {
    return self.indexOf(val) === i;
  }
  const answerMap = questionById?.answers
    ?.map((answer) => answer.userId)
    .filter(unique);
  const userFiltered = usersById?.filter(
    (data) => data.id === questionById?.userId,
  );
  const voteCheck = questionSocket?.votes?.some(
    (qwe) => qwe.userId === user.id,
  );

  useEffect(() => {
    const getQuestion = async () => {
      await getQuestionById(dispatch, id);
    };
    getQuestion();
  }, []);

  useEffect(() => {
    setQuestionSocket(questionById);
    getUsersById(dispatch, questionById.userId);
    answerMap?.forEach((a) => getUsersById(dispatch, a));
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
                Posted by: {userFiltered[0]?.firstName}{' '}
                {userFiltered[0]?.lastName}
              </p>
            </TopLeftContainer>

            <VoteContainer>
              {!voteCheck ? (
                <button
                  type="button"
                  id={questionSocket._id}
                  onClick={(e) => handleUpVote(e, e.target.id)}
                >
                  <ThumbUpOutlinedIcon className="normal" />
                </button>
              ) : (
                <button
                  type="button"
                  id={questionSocket._id}
                  onClick={(e) => handleDownVote(e, e.target.id)}
                >
                  <ThumbUpIcon id={questionSocket._id} className="active" />
                </button>
              )}
            </VoteContainer>

            <TopRightContainer>
              <p>Answers: {questionSocket.answers.length}</p>
              <p>Likes: {questionSocket.voteCount}</p>
              <p>Company: {questionSocket.company}</p>
            </TopRightContainer>
          </TopContainer>

          <BottomContainer>
            <AnswersContainer>
              {questionSocket.answers.map((answer) => {
                const filtered = usersById.filter(
                  (data) => data.id === answer.userId,
                );
                const photo = cld.image(
                  filtered[0]?.photo?.public_id || 'Default-Profile-Photo',
                );
                return (
                  <SingleAnswerContainer key={answer._id}>
                    <InfoContainer>
                      <AdvancedImage cldImg={photo} />
                      <p>
                        {filtered[0]?.firstName} {filtered[0]?.lastName}
                      </p>
                    </InfoContainer>
                    <div
                      className="answer"
                      dangerouslySetInnerHTML={{
                        __html: answer.description,
                      }}
                    />
                  </SingleAnswerContainer>
                );
              })}
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
