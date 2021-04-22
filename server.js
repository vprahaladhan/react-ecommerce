const express = require('express');
const app = express();
const jsonServer = require('json-server');
const cors = require('cors');

app.use(express.static('build'));
app.use(cors());
app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger);

app.use('/', jsonServer.defaults(), jsonServer.router('db.json'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});