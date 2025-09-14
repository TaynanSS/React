import { useState, useEffect } from "react";
import type { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);


  // Esse useEffect é pra caso eu queira que os filmes carreguem assim que a página for carregada
  useEffect(()=> {
    loadMovies();
  }, []);

  

  /*  PRIMEIRO MODO DE FAZER A REQUISIÇÃO
  function loadMovies() {
    fetch('https://taynanss.github.io/movies-json/filmes.json')
      .then((response)=> {
        return response.json();
      })
      .then((json)=> {
        setMovies(json);
      });
  }*/

// SEGUNDO MODO DE FAZER USANDO O ASYN - AWAIT
/*
  const loadMovies = async () => {
    try {
    setLoading(true);
    let response = await fetch('https://taynanss.github.io/movies-json/filmes.json/'); // crio a variável response e espero a requisição ser feita no fetch para colocar na variável.
    let json = await response.json(); // crio a variável json e transformo o response em json
    setLoading(false);
    setMovies(json); // por fim insiro o json na state.
    } catch(error) { // O catch irá mostrar as informações nele caso aconteça um erro no carregamento das requisições.
      setLoading(false);
      console.error(error); // Esse comando irá mostrar no console o erro que ocorreu no momento da requisição.
    }
  }
*/

// Como fazer o TRY CATCH usando o THEN.

  function loadMovies() {
    fetch('https://taynanss.github.io/movies-json/filmes.json/')
      .then((response)=> {
        return response.json();
      })
      .then((json)=> {
        setMovies(json);
      })
      .catch((error) => {
        setLoading(false);
        setMovies([]);
        console.error(error);
      })
  }



  // Com o useEffect, não é necessário ter o botão para carregar, pois ele já roda a function de maneira automática.
  // Assim removi o botão da div principal <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}> Carregar Filmes</button>
  return (
    <div>
      { loading && 
        <div>Carregando...</div>
      }

      {!loading && movies.length > 0 /*Outra condição para que as infos abaixo não mostrem após ocorrer o erro.*/ && 
        <>
          <div>Total de Filmes: {movies.length}</div>
          <div className="grid grid-cols-6 gap-3">
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.Images} className="w-42 block" />
                {item.Title}
              </div>
            ))}
          </div>
        </>
      }

      <div>Ocorreu um erro. Tente novamente mais tarde...</div>
    </div>
    
    
  );
  
}

export default App; 

// https://taynanss.github.io/movies-json/filmes.json

// https://www.omdbapi.com/?i=tt3896198&apikey=8f7ea07a&/

// https://api.b7web.com.br/cinema/