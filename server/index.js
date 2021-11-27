const express = require('express');
const axios = require('axios');
const cors = require('cors')

const server = express();
const port = 5000

// Middleware plugins
server.use(cors())

// Axios configuration
const api = axios.create({
  baseURL: 'https://zccticketviewer8797.zendesk.com/api/v2',
  headers: { Authorization: 'Basic aGFraGFkZUBpdS5lZHU6UHVuZUAxMjM=' },
  responseType: 'json',
  responseEncoding: 'utf8'
})

// GET request
server.get('/', function(req, res) {
  api.get('/tickets.json?sort_by=status')
    .then(function(response) {
      console.log(`Ticket Data recieved, totalling ${response.data.requests.length} tickets` )
      res.send(response.data.requests)
    })
    .catch(function(error) {
      console.log('!!!---Error---!!!')
      console.log(`[status: ${error.response.status}] [${error.response.statusText}] [${error.response.data.error}]`)
      res.send(JSON.stringify(error.response.status))
    })
});

// Error Handler
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  })
})

// Start the server
server.listen(port, (error) => {
  if (error) {
    console.error('Error starting server: ', error);
  } else {
    console.log(`Server started at http://localhost:${port}`);
  }
})