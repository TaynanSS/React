import { useState } from 'react';
import { Header } from './components/header'
import { Photo } from './components/Photo'

const App = () => {
  const [name, setName] = useState('Taynan');

  const buttonClick = () => {
    setName('Livia');
  }

  return (
    <div>
      <Header title = 'Só os mais lindos' />
      
      Olá {name}.
      <button onClick = {buttonClick}>Clique aqui</button>
      <Photo legend = 'Google'>
        <img src = 'https://www.google.com.br/google.jpg'/>
      </Photo>
    </div>
  );
  
}

export default App; 
