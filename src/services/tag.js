const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllTags = () => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };

  return fetch(`${URL_BASE}/api/tags`, payload);
};

const tag = {
  getAllTags,
};

export default tag;
