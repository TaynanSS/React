import { useState, useEffect, type ChangeEvent } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])
// useEffect fará a inserção das informações no momento que os states colocados no array [] foram feitos.


  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <input type="text" value={name} placeholder="Digite seu NOME" onChange={handleNameChange}/>
      <input type='text' value={lastName} placeholder="Digite seu SOBRENOME" onChange={handleLastNameChange}/> 
      Nome Completo: {fullName}
    </div>
    
  );
  
}

export default App; 
