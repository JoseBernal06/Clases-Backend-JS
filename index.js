// node --version
// npm -v
// npm init --y
// npm install express
// npm install
//! node --watch 'index.js'
//  http://localhost:3000/ 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



