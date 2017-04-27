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
