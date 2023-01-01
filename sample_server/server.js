//how to create express server.js?

const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => {
  res.sendFile('public/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


