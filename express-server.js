const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('This is how we do it!!')
})

app.listen(3000, function() {
  console.log('You actually did it!!!! You accesed port 3000')
})
