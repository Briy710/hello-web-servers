const express = require('express');
const fs = require( 'fs' )

const app = express()

//renders layout.pug
app.get('/', function (req, res) {
  fs.readdir( './files/', function( err, files ) {
    if( err ) {
      res.render( 'index', { files: [] })
    } else {
      res.render( 'index', { files: files })
    }
  })
})

//sets pug as the view engine
app.set('view engine', 'pug')

//allows access to files in public folder
app.use(express.static('public'))

app.listen(3000, function() {
  console.log('You actually did it!!!! You accesed port 3000')
})
