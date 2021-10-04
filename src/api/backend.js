const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    baseURL: 'http://10.0.2.2:3000/'
  });

  export default backendAPI;