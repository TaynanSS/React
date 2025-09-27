import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';

const App = () => {
  return (
    <div>
      <C.Container>
        <C.infoArea>
          <C.Logo href=''>
            <img src={logoImage} width='200' alt='' />
          </C.Logo>
          <C.info>
            ...
          </C.info>
          <button>Reiniciar</button>
        </C.infoArea>

        <C.gridArea>
          ...
        </C.gridArea>
      </C.Container>
    </div>
  )
}

export default App;