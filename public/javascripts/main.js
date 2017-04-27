document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#submit').addEventListener('click', function(){
    let inputText = document.querySelector('#input').value
    let outputText = document.createElement('p')
    outputText.innerText = inputText
    document.querySelector('.preview-view').appendChild(outputText)
  })
})


// function(){
//   document.querySelector('#newFile').adaddEventListener('click', function(){
//     let file = document.createDocumenFragment('md')
//   })
// }
