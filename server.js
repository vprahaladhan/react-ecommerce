const cors = require('cors');
const axios = require('axios');
const express = require('express');
const jsonServer = require('json-server');

const app = express();

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

app.use('/json-server', jsonServer.defaults(), jsonServer.router('db.json'));

app.post('/post', async function (req, res) {
  const { data } = await axios.get(req.body.url);
  const { count, results, pagination } = data;
  console.log('Results > ', count, results.length, pagination);
  res.json({
    count,
    results,
    pagination
  })
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});