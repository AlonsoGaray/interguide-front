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
      password,
      firstName,
      lastName,
      photo,
      role,
    }),
  };
  return fetch(`${URL_BASE}/api/users`, payload);
};

const user = {
  registerAccount,
  loginAccount,
};

export default user;
