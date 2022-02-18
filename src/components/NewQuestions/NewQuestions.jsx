/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../../utils/socket';
import {
  Container,
  TopContainer,
  QuestionsContainer,
  SingleContainer,
  RightSingleContainer,
  LeftSingleContainer,
  UserInfoContainer,
} from './styled';
import { getUsersById, getQuestionsFromDB } from '../../store/actions';
import Loader from '../Loader';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const NewQuestions = () => {
  const usersById = useSelector((state) => state.usersById);
  const questions = useSelector((state) => state.question);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questionsSocket, setQuestionsSocket] = useState([]);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });

  function unique(val, i, self) {
    return self.indexOf(val) === i;
  }

  useEffect(() => {
    const getQuestions = async () => {
      await getQuestionsFromDB(dispatch);
    };
    getQuestions();
  }, []);

  useEffect(() => {
    setQuestionsSocket(questions);
    const idMap = questions?.map((answer) => answer.userId).filter(unique);
    idMap?.forEach((a) => getUsersById(dispatch, a));
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
        <h1 className="title">Recent Questions</h1>
        <button type="button" onClick={() => navigate('/post-question')}>
          Post a Question
        </button>
      </TopContainer>
      <QuestionsContainer>
        {questionsSocket.length > 0 ? (
          questionsSocket?.map((q) => {
            const filtered = usersById?.filter((data) => data.id === q.userId);
            const photo = cld.image(
              filtered[0]?.photo?.public_id || 'Default-Profile-Photo',
            );
            return (
              <SingleContainer key={q._id}>
                <LeftSingleContainer>
                  <UserInfoContainer>
                    <p>
                      posted by: {filtered[0]?.firstName}{' '}
                      {filtered[0]?.lastName}
                    </p>
                    <AdvancedImage cldImg={photo} />
                  </UserInfoContainer>
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
            );
          })
        ) : (
          <Loader />
        )}
      </QuestionsContainer>
    </Container>
  );
};

export default NewQuestions;
