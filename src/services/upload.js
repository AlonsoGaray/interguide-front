import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const postFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${URL_BASE}/api/uploads/file`, formData);
};

const file = {
  postFile,
};

export default file;
