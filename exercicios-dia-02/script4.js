let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
let resultado = 0

for (let list of numbers){
  resultado = list + resultado
}
  console.log(resultado)

if (resultado > 20) {
  console.log('valor maior que 20')
}
else {
  console.log('valor menor ou igual a 20')
}