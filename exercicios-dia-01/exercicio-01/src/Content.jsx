import React from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

// const fjodanj = 'gostoso'
// const djsnjf = 'abacate ' + fjodanj ' sfijsfjg'

class Content extends React.Component {
  render() {
    return (
      <h1> { conteudos.map(e =>  `O conteudo é ${e.conteudo}. 
      O bloco é ${e.bloco}. ` ) }  </h1>
    )
  }
}

export default Content