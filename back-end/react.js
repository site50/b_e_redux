const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query_react')
const port = 3005
const cors = require('cors');

let corsOpltions = { origin: ['http://localhost:3000'] }

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, Authorization");
  res.header({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' })
  res.header("Access-Control-Allow-Credentials:true");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  next();
});

app.get('/posts', db.getReact)
app.get('/posts/:id', db.getReactById)
app.post('/posts', db.createSelect)
app.put('/posts/:id', db.upSelect)
app.delete('/posts/:id', cors(corsOpltions), db.deleteSelect)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})