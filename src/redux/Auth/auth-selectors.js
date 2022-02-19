const getToken = (state) => state.user?.token;

const getIsLoggedIn = (state) => {
  if (getToken(state)) return true;
  return false;
};

const getCurrentUser = (state) =>
  state.auth.queries[`getCurrentUser("${getToken(state)}")`]?.data || {};

export { getToken, getCurrentUser, getIsLoggedIn };
