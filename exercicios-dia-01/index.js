const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const previous = document.getElementById('previous');
const next = document.getElementById('next');

next.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR'})
})

previous.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR'})
})

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEXT_COLOR':
      return { ...state, index: state.index + 1 }
    case 'PREVIOUS_COLOR':
      return { ...state, index: state.index - 1 }
    default:
      return state
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();
  setColor(state)
})

function setColor({ colors, index}) {
  const p = document.getElementById('value');
  const container = document.getElementById('container')
  console.log(index)
  if(colors.length ===  index){
    index = 0
    p.innerHTML = colors[index]
    container.style.backgroundColor = colors[index]
  } 
  if(index === -1) {
    index = colors.length -1
    p.innerHTML = colors[index]
    container.style.backgroundColor = colors[index]
  } else {
    p.innerHTML = colors[index]
    container.style.backgroundColor = colors[index]
  }
}

// listener
// chama dispath no listener
// dispatch tem q ter o type
// atualiza o reducer
// usa o subscribe pra mostrar na tela
