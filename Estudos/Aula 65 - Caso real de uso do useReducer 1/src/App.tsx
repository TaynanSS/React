import { useState, type ChangeEvent } from "react";
import { usePeopleList } from './reducers/peopleList';


const App = () => { // useReducer recebe dois parâmetros, o 1° é a função e o 2° é o valor inicial, igual ao useState

  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
    dispatch({
      type: 'ADD',
      payload: {
        name: nameInput
      }
    });
    setNameInput('');
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
  }
  const deletePerson = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: { id }
    })
  }
  const handleOrderButton = () => {
    dispatch({
      type: 'ORDER'
    });
  }

  return (
    <div className='p-5'>
      <input className="border-2" type="text" value={nameInput} onChange={handleInputChange} />
      <button className="p-2" onClick={handleAddButton} >Adicionar</button>

      <hr className='border-black' />

      <button className='border-2 font-bold' onClick={handleOrderButton} >Ordenar</button>
      <br/>

      Lista de pessoas: 

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button className="ml-2 text-sm" onClick={() => deletePerson(item.id)} >[ Deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  ); 
}

export default App; 