import React, { useState } from 'react'

const App = () => {

  // criado os States desses value.
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(10);  //Coloquei o valor inicial 10 apenas para não deixar vazio.

  const inputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName( event.target.value )
  }
// coloquei para que esses eventos recebam o valor modificado de value. --> setName( event.target.value )
  const inputLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname( event.target.value )
  }

  const inputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge( parseInt(event.target.value ) ); // O 'parseInt' servirá para o programa reconhecer o valor como number
  }

  return ( // Adicionado primeiramente os value
    // Após isso criei os Event’s de modificação onChange
    <div>
      <div> 
        Nome:
        <input type="text" value={name} onChange={inputName}/> 
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastname} onChange={inputLastname}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={inputAge}/>
      </div>

      <hr/>

      Olá {name} {lastname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;
