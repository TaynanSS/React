import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutTaynan } from './pages/AboutTaynan';
import { AboutLivia } from './pages/AboutLivia';

const App = () => {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr/>
      <div className="py-4" >
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/sobre/taynan' element={<AboutTaynan />} />
          <Route path='/sobre/livia' element={<AboutLivia />} />
        </Routes>

      </div>
      <hr/>
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App; 
