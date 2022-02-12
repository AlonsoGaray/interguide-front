const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const registerAccount = ({
  email,
  emailVerified,
  name,
  nickname,
  photo,
  sub,
  role,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      emailVerified,
      name,
      nickname,
      photo,
      sub,
      role,
    }),
  };
  return fetch(`${URL_BASE}/api/users`, payload);
};

const user = {
  registerAccount,
};

export default user;
