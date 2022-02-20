/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector, useDispatch } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import socket from '../../utils/socket';
import {
  Container,
  TopContainer,
  QuestionsContainer,
  SingleContainer,
  RightSingleContainer,
  LeftSingleContainer,
  UserInfoContainer,
  VoteContainer,
  UnselectedContainer,
} from './styled';
import {
  getUsersById,
  getQuestionsFromDB,
  upVoteQuestion,
  downVoteQuestion,
} from '../../store/actions';
import Loader from '../Loader';

const animatedComponents = makeAnimated();
const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const Companies = () => {
  const user = useSelector((state) => state.user);
  const usersById = useSelector((state) => state.usersById);
  const questions = useSelector((state) => state.question);
  const companyDB = useSelector((state) => state.companyDB);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questionsSocket, setQuestionsSocket] = useState([]);
  // const [companySelected, setCompanySelected] = useState({
  //   value: 'Microsoft',
  //   label: 'Microsoft',
  // });
  const [companySelected, setCompanySelected] = useState(null);

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

  function unique(val, i, self) {
    return self.indexOf(val) === i;
  }

  const companies = companyDB.map((company) => {
    return {
      value: company.name,
      label: company.name,
    };
  });

  const companiesFiltered = questionsSocket?.filter(
    (x) => x.company === companySelected?.value,
  );
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

    socket.on('question:update', () => {
      getQuestionsFromDB(dispatch);
    });

    return () => {
      socket.off('question:create');
      socket.off('question:update');
    };
  }, [questionsSocket, questions]);

  return (
    <Container>
      <TopContainer>
        <h1 className="title">Companies</h1>
        <Select
          name="companySelect"
          className="companySelect"
          // defaultValue={{ label: 'Microsoft', value: 'Microsoft' }}
          components={animatedComponents}
          onChange={setCompanySelected}
          options={companies}
          maxMenuHeight={250}
          placeholder="Select company"
        />
        <button
          type="button"
          onClick={() => navigate('/post-question')}
          data-cy="post-question-btn"
        >
          Post a Question
        </button>
      </TopContainer>

      {companySelected !== null ? (
        <QuestionsContainer>
          {questionsSocket?.length > 0 ? (
            companiesFiltered?.map((q) => {
              const voteCheck = q.votes.some((qwe) => qwe.userId === user.id);
              const filtered = usersById?.filter(
                (data) => data.id === q.userId,
              );
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
                    <Link to={`/question/${q._id}`}>{q.question}</Link>
                    <div className="tags">
                      {q.tag.map((tag) => (
                        <p className="tag" key={tag._id}>
                          {tag.name}
                        </p>
                      ))}
                    </div>
                  </LeftSingleContainer>

                  <VoteContainer>
                    {!voteCheck ? (
                      <button
                        data-cy="like-btn"
                        type="button"
                        id={q._id}
                        onClick={(e) => handleUpVote(e, e.target.id)}
                      >
                        <ThumbUpOutlinedIcon className="normal" />
                      </button>
                    ) : (
                      <button
                        data-cy="dislike-btn"
                        type="button"
                        id={q._id}
                        onClick={(e) => handleDownVote(e, e.target.id)}
                      >
                        <ThumbUpIcon id={q._id} className="active" />
                      </button>
                    )}
                  </VoteContainer>

                  <RightSingleContainer>
                    <p>Answers: {q.answers.length}</p>
                    <p>Likes: {q.voteCount}</p>
                    <p>Company: {q.company}</p>
                  </RightSingleContainer>
                </SingleContainer>
              );
            })
          ) : (
            <Loader />
          )}
        </QuestionsContainer>
      ) : (
        <UnselectedContainer>
          <ArrowUpwardIcon />
          <p>Select a company</p>
        </UnselectedContainer>
      )}
    </Container>
  );
};

export default Companies;
