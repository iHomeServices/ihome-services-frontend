const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: "https://b786-189-68-124-131.ngrok.io"
  });

  export default backendAPI;