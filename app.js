const express = require('express');
const router = express.Router();
const app = express()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
//renders layout.pug
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey you there', message: 'I see you over there!' })
})
//sets pug as the view engine
app.set('view engine', 'pug')

//allows access to files in public folder
app.use(express.static('public'))
app.listen(3000, function() {
  console.log('You actually did it!!!! You accesed port 3000')
})

module.exports = router
