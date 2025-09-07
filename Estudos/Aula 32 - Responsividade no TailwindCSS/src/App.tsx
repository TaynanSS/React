

const App = () => {

  // breakpoint são os pontos de mudança do tamanho da resolução.
  /*
  
  sm	40rem (640px)	@media (width >= 40rem) { ... }
  md	48rem (768px)	@media (width >= 48rem) { ... }
  lg	64rem (1024px)	@media (width >= 64rem) { ... }
  xl	80rem (1280px)	@media (width >= 80rem) { ... }
  2xl	96rem (1536px)	@media (width >= 96rem) { ... }

  */

  return (
    <div className='bg-blue-500 text-white p-4 font-bold flex flex-col text-center sm:flex-row sm:text-stone-950 sm:justify-between'>Texto Qualquer Aqui
    
    <button className='bg-green-400 text-white font-bold border-black mt-3 w-40 sm:text-orange-600 '>Clique Aqui</button>
    </div>

    
  );
  
}

export default App; 
