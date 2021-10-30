const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: "https://9e42-200-185-243-70.ngrok.io"
  });

  export default backendAPI;