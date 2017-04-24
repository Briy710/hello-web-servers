const express = require('express')
const app = express()

app.get('/', function(req, res) {
res.send('This is my express server')
})

app.listen(3000, function() {
console.log('This is how we do it, on port 3000!')
})
