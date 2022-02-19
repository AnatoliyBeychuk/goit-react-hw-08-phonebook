import { getToken } from "../Auth/auth-selectors";

const getFilter = (state) => state.filter;
const getContacts = (state) =>
  state.contacts.queries[`fetchContacts("${getToken(state)}")`]?.data || [];

export { getFilter, getContacts };
