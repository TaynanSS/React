import { useState, useEffect } from "react";
import type { Post } from './types/Post';


const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {    
    loadPosts();
  }, []);

  const loadPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPost(json);
  }

  return (
    <div className="p-5">
      { loading && 
        <div>Carregando...</div>
      }

      {!loading && post.length > 0 && 
        <>
          <div>Total de Posts: {post.length}</div>
          <div>
            {post.map((item, index) => (
              <div key={index} className="my-4">
                <hr className="border-black"></hr>
                <h4 className="font-bold">{item.title}</h4>
                <small>#{item.id} - Usuário: {item.userId}</small>
                <p>{item.body}</p>
                <hr className="border-black"></hr>
              </div>
            ))}
          </div>
        </>
      }
      {!loading && post.length === 0 && 
        <div>Não há posts para exibir.</div>
      }
    </div>
)}

export default App; 



// https://taynanss.github.io/movies-json/filmes.json

// https://www.omdbapi.com/?i=tt3896198&apikey=8f7ea07a&/

// https://api.b7web.com.br/cinema/