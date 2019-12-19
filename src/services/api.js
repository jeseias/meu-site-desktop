const axios = require('axios')

const api = axios.create({
  baseURL: 'http://127.0.0.1:2001'
})

module.exports = api