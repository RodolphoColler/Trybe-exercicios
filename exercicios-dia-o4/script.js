let firstButton = document.getElementById('buttonBackgroundColor');
firstButton.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor(){
  let body = document.getElementById('bodyColor')
  body.style.backgroundColor = 'white'
}
 
let secondButton = document.getElementById('buttonFontColor')
secondButton.addEventListener('click', changeFontColor)

function changeFontColor(){
  let fontColor = document.getElementsByClassName('text')
  for(let i = 0; i < fontColor.length; i += 1){
    fontColor[i].style.color = 'black'
  }
}

let thirdButton = document.getElementById('buttonFontSize')
thirdButton.addEventListener('click', changeFontSize)

function changeFontSize(){
  let fontSize = document.getElementsByClassName('text')
  fontSize[1].style.font-size 
}


let fifthButton = document.getElementById('buttonFontFamily')
fifthButton.addEventListener('click', changeFontFamily)

function changeFontFamily(){
  let fontsFamily = document.getElementsByClassName('text')
  for(let i = 0; i < fontsFamily.length; i += 1){
    fontsFamily[i].style.fontFamily = "Style Script, cursive";
  }
}

let fontsFamily = document.getElementsByClassName('text')

console.log(fontsFamily.length)