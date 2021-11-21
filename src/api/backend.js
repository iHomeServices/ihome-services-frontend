const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: "https://7b64-201-87-108-156.ngrok.io"
  });

  export default backendAPI;