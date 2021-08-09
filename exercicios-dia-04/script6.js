function ehPalindromo (palindromo){
  let storage = ''
  for(let i = palindromo.length -1; i >= 0 ; i -= 1){
    storage += palindromo[i];
  };
  if(storage === palindromo){
    return console.log(true);
  }
  else {
    return console.log(false);
  } 
}
ehPalindromo('agradeço')

//Objetivo do exercicio: fazer uma função que verifica se uma palavra é palindromo ou não
