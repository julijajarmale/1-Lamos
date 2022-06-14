const express = require('express')
const app = express()
const port = 3003

//Routes
app.get('/', (req, res) => {
  res.send('Bye bye World!')
})

app.get('/zuikis', (req, res) => {
    res.send('Labas zuiki!')
  })

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr. ${port}`)
})