export const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://horrorflix01.herokuapp.com';

export default URL;
