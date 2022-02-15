const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllCompanies = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/companies`, payload);
};

const createCompany = ({ userId, name }) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify({
      userId,
      name,
    }),
  };
  return fetch(`${URL_BASE}/api/companies`, payload);
};

const company = {
  getAllCompanies,
  createCompany,
};

export default company;
