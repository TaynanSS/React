import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';


const resetAndCreateGrid = () => {

}

const App = () => {
  return (
    <div>
      <C.Container>
        <C.infoArea>
          <C.Logo href=''>
            <img src={logoImage} width='200' alt='' />
          </C.Logo>

          <C.info>
            <InfoItem label='Tempo' value='00:00' />
            <InfoItem label='Movimentos' value='0' />
          </C.info>

          <Button icon={RestartIcon} label='Reiniciar' onClick={resetAndCreateGrid}/>

        </C.infoArea>

        <C.gridArea>
          ...
        </C.gridArea>
      </C.Container>
    </div>
  )
}

export default App;