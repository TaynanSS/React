import { useState } from 'react';

const App = () => {

  const [clicked, setClicked] = useState('#FF0000'); // Sempre começa com false nessas situações.
  const [padding, setPadding] = useState(0); // atrirbui o valor de 0 para o botão, assim ele vai ser o tamanho normal

  const handleClick = () => {
    setClicked( '#00FF00'); //Sempre que o usuário clicar, o state irá para TRUE
    setPadding(20); // Caso o usuário clique no botão, o tamanho do botão aumentará para o valor colocado.
  }

 // Assim criamos uma estilização dinâmica
 //Em style colocamos uma render condicional para trocar de cor de acordo com valaor do state CLICKED.

 //Adicionado um PADDING que seria o tamanho do botão.
 // Como a função padding e o state criado também se chama padding, então basta só colocar PADDING no Style
  return (
    <div> 
      <button 
      onClick={handleClick}
      style={{background: clicked , color: '#FFFF', padding}}>
      Clique aqui...</button>
    </div>
  );
  
}

export default App;