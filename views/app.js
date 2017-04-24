const express = require('express');
const router = express.Router();
const app = express()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/', function(req, res) {
  res.send('This is how we do it!!')
})

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey you there', message: 'I see you over there!' })
})

// app.set('view engine', 'pug')

app.listen(3000, function() {
  console.log('You actually did it!!!! You accesed port 3000')
})

module.exports = router
