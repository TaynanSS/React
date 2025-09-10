import { useEffect, useState } from "react";

const App = () => {
  let [name, setName] = useState('Taynan');

  useEffect(() => {
    alert('Executado!!')
  }, [name])

  const handleClick = () => {
    setName('Livia');
  }

  return (
    <div> 
      Nome: {name}
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
  
}
export default App;