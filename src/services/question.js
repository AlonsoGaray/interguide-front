const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllQuestions = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/questions`, payload);
};

const createQuestion = ({
  userId,
  firstName,
  lastName,
  company,
  question,
  tag,
}) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify({
      userId,
      firstName,
      lastName,
      question,
      company,
      tag,
    }),
  };
  return fetch(`${URL_BASE}/api/questions`, payload);
};

const getQuestionById = (questionId) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };
  return fetch(`${URL_BASE}/api/questions/${questionId}`, payload);
};

const question = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
};

export default question;
