import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';



const App = () => {

  const [playing, setPlaying] = useState<boolean>(false); // Pra saber se o jogo está acontecendo ou não.
  const [timeElapsed, setTimeElapsed] = useState<number>(0); // O tempo que passou no jogo. Contando em segundos.
  const [moveCount, setMoveCount] = useState<number>(0); // Quantidade de movimentos feitos até o momento.
  const [shownCount, setShownCount] = useState<number>(0); // Quantidade de cartas estão sendo mostradas naquela jogada. No máximo 2.
  const [gridItems, setGridItems] = useState<GridItemType[]>([]); // Um array com os itens. Nesse caso tive que criar o GridItemTypes para conter as informações de cada item.

  useEffect(() => resetAndCreateGrid(), []); //Assim que a tela carregar, a função irá limpar tudo que tiver e iniciar o grid novamente.

  const resetAndCreateGrid = () => {
    // Passo 1 - Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Passo 2 - Criar o grid
    
    //2.1 - Criar um grid vazio
    
    let tmpGrid: GridItemType[] = [];  // O grid precisa criar primeiro o array, preencher o array, e depois jogar dentro do state gridItems
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // 2.2 - preencher o grid

    
    // 2.3 - jogar no state
    setGridItems(tmpGrid);

    // Passo 3 - Começar o jogo
    setPlaying(true);
  }

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
          <C.Grid>
            
          </C.Grid>
        </C.gridArea>
      </C.Container>
    </div>
  )
}

export default App;