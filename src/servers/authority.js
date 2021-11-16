const setToken = (token) => localStorage.setItem('gaerZoneToken', JSON.stringify(token));

const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem('gaerZoneToken'));
  return token?.access.token;
};

export { getAccessToken, setToken };
