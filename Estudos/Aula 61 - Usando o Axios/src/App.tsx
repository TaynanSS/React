import { useState, useEffect} from "react";
import type { Post } from './types/Post';
import { Postform } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { api } from './api';

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {    
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPost(json);
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
      if(json.id) {
        alert('Post adicionado com sucesso!')
      } else {
        alert('Ocorreu algum erro. Tente novamente!')
      }
  }

  return (
    <div className="p-5">
      { loading && 
        <div>Carregando...</div>
      }

      <Postform onAdd={handleAddPost}/>

      {!loading && post.length > 0 && 
        <>
          <div>Total de Posts: {post.length}</div>
          <div>
            {post.map((item, index) => (
              <div key={index} className="my-4">
                <PostItem data={item} />
              </div>
            ))}
          </div>
        </>
      }
      {!loading && post.length === 0 && 
        <div>Não há posts para exibir.</div>
      }
    </div>
)
}

export default App; 



// https://taynanss.github.io/movies-json/filmes.json

// https://www.omdbapi.com/?i=tt3896198&apikey=8f7ea07a&/

// https://api.b7web.com.br/cinema/