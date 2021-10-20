const axios = require('axios');

const backendAPI = axios.create({
    // baseURL: 'https://reqres.in/api'
    // baseURL: 'http://10.0.2.2:3000/'
    baseURL: 'https://8611-2804-14d-8084-a537-4d20-3518-f67b-c19d.ngrok.io'
  });

  export default backendAPI;