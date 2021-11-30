const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: "https://a56b-200-185-240-63.ngrok.io"
  });

  export default backendAPI;