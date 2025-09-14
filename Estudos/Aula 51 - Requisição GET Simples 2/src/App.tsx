import { useState, useEffect } from "react";
import type { Movie } from './types/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);


  // Esse useEffect é pra caso eu queira que os filmes carreguem assim que a página for carregada
  useEffect(()=> {
    loadMovies();
  }, [])

  function loadMovies() {
    fetch('https://taynanss.github.io/movies-json/filmes.json')
      .then((response)=> {
        return response.json();
      })
      .then((json)=> {
        setMovies(json);
      });
  }


  // Com o useEffect, não é necessário ter o botão para carregar, pois ele já roda a function de maneira automática.

  // Assim removi o botão da div principal <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}> Carregar Filmes</button>
  return (
    <div>
      

      Total de Filmes: {movies.length}
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.Images} className="w-42 block" />
            {item.Title}
          </div>
        ))}
      </div>
    </div>
    
  );
  
}

export default App; 

// https://taynanss.github.io/movies-json/filmes.json

// https://www.omdbapi.com/?i=tt3896198&apikey=8f7ea07a&/

// https://api.b7web.com.br/cinema/