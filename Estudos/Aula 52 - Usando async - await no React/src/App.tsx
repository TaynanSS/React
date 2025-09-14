import { useState, useEffect } from "react";
import type { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);


  // Esse useEffect é pra caso eu queira que os filmes carreguem assim que a página for carregada
  useEffect(()=> {
    loadMovies();
  }, [])

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
    
  const loadMovies = async () => {
    setLoading(true);
    let response = await fetch('https://taynanss.github.io/movies-json/filmes.json'); // crio a variável response e espero a requisição ser feita no fetch para colocar na variável.
    let json = await response.json(); // crio a variável json e transformo o response em json
    setLoading(false);
    setMovies(json); // por fim insiro o json na state.
  }


  // Com o useEffect, não é necessário ter o botão para carregar, pois ele já roda a function de maneira automática.
  // Assim removi o botão da div principal <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}> Carregar Filmes</button>
  return (
    <div>
      { loading && 
        <div>Carregando...</div>
      }
      {!loading && 
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
    </div>
    
  );
  
}

export default App; 

// https://taynanss.github.io/movies-json/filmes.json

// https://www.omdbapi.com/?i=tt3896198&apikey=8f7ea07a&/

// https://api.b7web.com.br/cinema/