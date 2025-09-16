import { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

const initialState = { count: 0 };
const reducer = (state: reducerState, action: reducerAction) => { // aqui ele vai SEMPRE receber dois parâmetros. 1°: Valor atual do reducer || 2°: Qual ação quer executar. OS DOIS PRECISAM SER TIPADOS -> Type
  switch(action.type) {
    case 'ADD':
      return {...state, count: state.count + 1};
    break;
    case 'DEL':
      if(state.count > 0) {
        return {...state, count: state.count - 1};
      }
    break;
    case 'RESET':
      return initialState;
    break;
  }
  return state;
} // Essa função reducer funciona da seguinte forma:
// Ele recebe o state, farei as alterações se baseando no action no state, e no final ele vai querer retornar como ficou o state.


const App = () => { // useReducer recebe dois parâmetros, o 1° é a função e o 2° é o valor inicial, igual ao useState
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='p-5'>
      Contatem: {state.count}
      <hr className='border-black'/>
      <button className='p-3 font-bold' onClick={()=>dispatch({type: 'ADD'})}>Adicionar</button>
      <button className='p-3 font-bold' onClick={()=>dispatch({type: 'DEL'})} >Remover</button>
      <button className='p-3 font-bold' onClick={()=>dispatch({type: 'RESET'})} >Resetar</button>
    </div>
  ); 
}

export default App; 