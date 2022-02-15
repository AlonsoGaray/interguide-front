const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllTags = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/tags`, payload);
};

const tag = {
  getAllTags,
};

export default tag;
