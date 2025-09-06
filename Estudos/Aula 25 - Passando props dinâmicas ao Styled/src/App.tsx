import * as C from './AppStyles';

const App = () => {
  
  return (
    <C.Container bgcolor='#FFFF'>
      Texto do Componente
      <C.Botao bg='#FF0000' > Botão grande</C.Botao>
      <C.Botao bg='#00FF00' small> Botão pequeno</C.Botao>
    </C.Container>
  );
  
}

export default App; 
