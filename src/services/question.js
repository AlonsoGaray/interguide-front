const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const createQuestion = ({ userId, firstName, lastName, question, tag }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      firstName,
      lastName,
      question,
      tag,
    }),
  };
  return fetch(`${URL_BASE}/api/questions`, payload);
};

const question = {
  createQuestion,
};

export default question;
