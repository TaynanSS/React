import { Pessoa } from './components/Pessoa'

const App = () => {

  let list = [
    {name: 'taynan', age: 27},
    {name: 'livia', age: 22},
    {name: 'laura', age: 30},
    {name: 'pIvo', age: 25}
  ]
  
  return (
    <div>
      <h2>Lista de Presença:</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item}/>
        ))}
      </ul>
    </div>
  );
  
}

export default App; 
