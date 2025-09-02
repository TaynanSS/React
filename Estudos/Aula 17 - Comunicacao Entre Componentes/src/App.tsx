import { Botao } from './components/Botao'

const App = () => {

  let textoDoBotao = 'Clique no botão'

  const botaoEventAction = (txt: string) => {
    alert('Frase do App: '+ txt);
  }
  
  return (
    <div> 
      <Botao text={textoDoBotao} clickFn={botaoEventAction}/>
    </div>                    
  );
  
}

export default App; 
