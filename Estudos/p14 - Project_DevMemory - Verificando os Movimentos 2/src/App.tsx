import { useEffect, useState } from 'react';
import * as C from './App.styles';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';




const App = () => {

  const [playing, setPlaying] = useState<boolean>(false); // Pra saber se o jogo está acontecendo ou não.
  const [timeElapsed, setTimeElapsed] = useState<number>(0); // O tempo que passou no jogo. Contando em segundos.
  const [moveCount, setMoveCount] = useState<number>(0); // Quantidade de movimentos feitos até o momento.
  const [shownCount, setShownCount] = useState<number>(0); // Quantidade de cartas estão sendo mostradas naquela jogada. No máximo 2.
  const [gridItems, setGridItems] = useState<GridItemType[]>([]); // Um array com os itens. Nesse caso tive que criar o GridItemTypes para conter as informações de cada item.

  useEffect(() => resetAndCreateGrid(), []); //Assim que a tela carregar, a função irá limpar tudo que tiver e iniciar o grid novamente.

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  //Verificar se os ícones abertos são iguais.
  useEffect(()=> {
      if(shownCount === 2) {
        let opened = gridItems.filter(item => item.shown === true);
        if(opened.length === 2) {

          let tmpGrid = [...gridItems];
          if(opened[0].item === opened[1].item) {
            // v1 - if both are equal, make every "shown" permanent
            for(let i in tmpGrid) {
              if(tmpGrid[i].shown) {
                tmpGrid[i].permanentShown = true;
                tmpGrid[i].shown = false;
              }
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          } else {
            // v2 - if they are NOT equal, close all "shown"
            setTimeout(() => {
              let tmpGrid = [...gridItems];
              for (let i in tmpGrid) {
                tmpGrid[i].shown = false;
              }
              setGridItems(tmpGrid);
              setShownCount(0);
            }, 1000);
        }
        setMoveCount(moveCount => moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

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
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        
        tmpGrid[pos].item = i;
      }
    }
    
    // 2.3 - jogar no state
    setGridItems(tmpGrid);

    // Passo 3 - Começar o jogo
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  }

  return (
    <div>
      <C.Container>
        <C.infoArea>
          <C.Logo href=''>
            <img src={logoImage} width='200' alt='' />
          </C.Logo>

          <C.info>
            <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
            <InfoItem label='Movimentos' value={moveCount.toString()} /* O value também pode ser feito dessa forma => value={`${moveCount}`}*//>
          </C.info>

          <Button icon={RestartIcon} label='Reiniciar' onClick={resetAndCreateGrid}/>

        </C.infoArea>

        <C.gridArea>
          <C.Grid>
            {gridItems.map((item, index)=>(
              <GridItem 
                key={index}
                item={item}
                onClick={()=> handleItemClick(index)}
              />
            ))}
          </C.Grid>
        </C.gridArea>
      </C.Container>
    </div>
  )
}

export default App;