document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#submit').addEventListener('click', function(){
    let inputText = document.querySelector('#input').value
    let outputText = document.createElement('p')
    outputText.innerText = inputText
    document.querySelector('.preview-view').appendChild(outputText)
  })
})

document.querySelector('#newFile').addEventListener('click', function(){
  let file = window.prompt()

  $.ajax({
    url: '/files',
    type: 'POST',
    data: JSON.stringify({ fileName: file }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function( message ){
      window.location.reload( true )
    }
  })
})
// let fileName = document.querySelector('#newFile').value
// let showFileName = document.createElement('h2')
// showFileName = fileName
// document.querySelector('#header').appendChild(showFileName)

// document.querySelector('.show-file-name')

// document.querySelector('#newFile').value.addEventListener('click', function(){
//   let showFileName = document.createElement('h2')
//   fileName.value = showFileName
//   document.querySelector('#header').appendChild(fileName)
// })

// document.querySelector('#saveFile').addEventListener('click', function(){
//   let save =
// })
