const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const loginAccount = ({ email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/auth/local/login`, payload);
};

const registerAccount = ({
  email,
  country,
  password,
  firstName,
  lastName,
  photo,
  role,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      country,
      password,
      firstName,
      lastName,
      photo,
      role,
    }),
  };
  return fetch(`${URL_BASE}/api/users`, payload);
};

const revalidateToken = (email) => {
  const accessTokenObj = localStorage.getItem('token');
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };
  return fetch(`${URL_BASE}/api/users/email/${email}`, payload);
};

const user = {
  registerAccount,
  loginAccount,
  revalidateToken,
};

export default user;
