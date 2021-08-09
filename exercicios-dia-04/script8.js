function indiceDoMenorNumero (array){
  let menorNumero =[0]
  for(let index = 0; index < array.length; index += 1){
    if(menorNumero > array[index]){
      menorNumero = array[index]
    }  
  }
  console.log(array.indexOf(menorNumero))
}
indiceDoMenorNumero([2, 4, 6, 7, 10, 0, -3])

//Objetivo do exercicio: criar uma função que mostre qual o indice do menor número de um array.