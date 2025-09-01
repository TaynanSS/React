import { Header } from './components/header'
import { Photo } from './components/Photo'
 
const App = () => {

  return (
    <div>
      <Header title='Este é um exemplo'/>
      <Header title='Outro Texto'/><br/>

      Olá Mundo<br/>

      <Photo legend='Google'>
        <img src="https://www.google.com.br/google.jpg" />  
      </Photo>
    </div>
  );
  
}

export default App; 
