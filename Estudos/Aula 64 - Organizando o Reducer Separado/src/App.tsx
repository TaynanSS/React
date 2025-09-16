import { useContagem } from './reducers/contagem';


const App = () => { // useReducer recebe dois parâmetros, o 1° é a função e o 2° é o valor inicial, igual ao useState
  const [contagem, contagemDispatch] = useContagem();

  return (
    <div className='p-5'>
      Contatem: {contagem.count}
      <hr className='border-black'/>
      <button className='p-3 font-bold' onClick={()=>contagemDispatch({type: 'ADD'})}>Adicionar</button>
      <button className='p-3 font-bold' onClick={()=>contagemDispatch({type: 'DEL'})} >Remover</button>
      <button className='p-3 font-bold' onClick={()=>contagemDispatch({type: 'RESET'})} >Resetar</button>
    </div>
  ); 
}

export default App; 