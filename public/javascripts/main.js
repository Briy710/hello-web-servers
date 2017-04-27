document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#submit').addEventListener('click', function(){
    let inputText = document.querySelector('#input').value
    let outputText = document.createElement('p')
    outputText.innerText = inputText
    document.querySelector('.preview-view').appendChild(outputText)
  })
})

document.addEventListener( 'click', function(){
  document.querySelector('#newFile').addEventListener('click', function(){
    let file = document.createElement().appendChild('.files')
    
  })
})
