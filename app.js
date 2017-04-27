const express = require('express');
const fs = require( 'fs' )
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

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

app.post( '/files', function( request, response ) {
  const fileName = request.body.fileName

  fs.open( `./files/${fileName}.md`, 'a+', ( err, file ) => {
    response.json({ message: 'Thanks for the file' })
  })
})

//sets pug as the view engine
app.set('view engine', 'pug')

//allows access to files in public folder
app.use(express.static('public'))

app.listen(3000, function() {
  console.log('You actually did it!!!! You accesed port 3000')
})
