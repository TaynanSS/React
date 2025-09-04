import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow( !show ); //Uma maneira mais simples de fazer é dessa forma. Sempre que o state for diferente, ele altera.
    
    //OUTRA FORMA DE FAZER
    /*if (show) {
      setShow(false);
    }// Coloquei na função do botão para fazer uma verificação do state. Dessa forma toda vez que o usuário clicar no botão, a mensagem irá aparecer ou esconder.
    else {
      setShow(true);
    }
    */
  }


  return (
    //Nessa div coloquei a função de click e nela coloquei uma renderização condicional, 
    //onde caso aquilo que está antes de && for true, o que está a direita será executado, no caso a div com a  mensagem.
  
    <div // Aqui mostro duas formas de botões. A primeira mais simples e a segunda com a condicional.
        // Na segunda coloco a condição de caso show seja true irá mostrar ‘Ocultar’, se não mostrará ‘Mostrar’. 
        > 
      <button onClick={handleClick}>Mostrar</button> 
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>
      
      {show && 
      <div>
        BlablaBla ...
      </div>  
      }
    </div>
  );
  
}

export default App; 
