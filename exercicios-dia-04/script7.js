function indiceDoMaiorNumero (array){
  let storage = 0
  for(let index = 0; index < array.length; index += 1){
    if(array[index] > storage){
      storage = array[index];
    } 
  } 
  console.log(array.indexOf(storage))
}
indiceDoMaiorNumero ([2, 3, 6, 7, 10, 1])

//Objetivo do exercicio: criar uma função que mostre qual o indice do maior número de um array.
