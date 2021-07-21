const hostApi = process.env.NODE_ENV === "development"
  ? "http://localhost"
  : "";
const portApi = process.env.NODE_ENV === "development"
  ? 8080
  : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/sofia-react"
  : "";


export default {
  redirectUrl,
  hostApi,
  portApi,
  baseURLApi,
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password'
  },
};
