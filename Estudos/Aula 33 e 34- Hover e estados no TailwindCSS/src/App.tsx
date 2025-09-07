

const App = () => {

  // breakpoint são os pontos de mudança do tamanho da resolução.
  /*
  
  sm	40rem (640px)	@media (width >= 40rem) { ... }
  md	48rem (768px)	@media (width >= 48rem) { ... }
  lg	64rem (1024px)	@media (width >= 64rem) { ... }
  xl	80rem (1280px)	@media (width >= 80rem) { ... }
  2xl	96rem (1536px)	@media (width >= 96rem) { ... }

  */
/*
  return (
    <div className='bg-blue-300'>Texto Qualquer Aqui
    
    <button className='bg-green-300 hover:bg-green-900 text-white hover:text-white font-bold border-black mt-3 w-40 sm:text-orange-600 '>Clique Aqui</button>
    </div>

//Usei um hover: para alterar a propriedade da cor do background quando passar o mouse.
//Fiz um hover para alterar a cor do texto também. Esse tipo de ação pode ser feito pra qualquer propriedade que eu queira.
  */
 
    return (
      <div className='bg-blue-300 p-5'>
        <input 
          className="outline-none border border-transparent bg-white p-3 rounded focus:ring-2 focus:ring-blue-700"  
          type="text" 
          placeholder="Digite alguma coisa">
        </input>

        <button 
        className="ml-2 p-2 bg-blue-400 rounded hover:bg-blue-500">Clique Aqui

        </button>
      </div>

      //FOCUS --> Quando o usuário clica na caixa de escrita do input, o RING que 
      //RING -->O contorno  que do input. Posso configurar o tamanho e cor do meu agrado.
      //OUTLINE --> remove as linhas da borda.
      //PLACEHOLDER --> caixa de interação com usuário, ao lado coloco a mensagem que vai ficar quase opaca dentro da caixa.
    );
  }


export default App; 
