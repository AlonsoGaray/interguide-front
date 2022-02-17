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
  MidSingleContainer,
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
  }, [questions]);

  useEffect(() => {
    socket.on('question:create', (data) => {
      setQuestionsSocket([...questionsSocket, data]);
    });

    return () => {
      socket.off('question:create');
    };
  }, [questionsSocket, questions]);

  useEffect(() => {
    if (questions.length !== 0) {
      const idMap = questions?.map((answer) => answer.userId).filter(unique);
      idMap?.forEach((a) => getUsersById(dispatch, a));
    }
  }, [questions]);

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
          questionsSocket?.map((q) => {
            const filtered = usersById?.filter((data) => data.id === q.userId);
            const photo = cld.image(
              filtered[0]?.photo?.public_id || 'Default-Profile-Photo',
            );
            return (
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

                <MidSingleContainer>
                  <p>{filtered[0]?.email}</p>
                  <AdvancedImage cldImg={photo} />
                </MidSingleContainer>

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
