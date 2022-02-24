const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const patchUser = (user) => {
  const accessTokenObj = localStorage.getItem('token');

  const userId = user.id;
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify(user),
  };

  return fetch(`${URL_BASE}/api/users/${userId}`, payload);
};

const getUsersById = (userId) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
  };
  return fetch(`${URL_BASE}/api/users/${userId}`, payload);
};

const plusPoints = (userID) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify(userID),
  };

  return fetch(`${URL_BASE}/api/users/like/plus`, payload);
};

const lessPoints = (userID) => {
  const accessTokenObj = localStorage.getItem('token');

  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenObj}`,
    },
    body: JSON.stringify(userID),
  };

  return fetch(`${URL_BASE}/api/users/like/less`, payload);
};

const user = {
  patchUser,
  getUsersById,
  plusPoints,
  lessPoints,
};

export default user;
