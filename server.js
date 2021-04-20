const path = require('path');
const express = require('express');
const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
 
server.use(middlewares)
server.use(router)

server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
});