const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: "https://c4f0-200-185-237-195.ngrok.io"
  });

  export default backendAPI;