import { MainRoutes } from './routes/RouteList';

const App = () => {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo do site</h1>
      </header>
      <hr/>
      <div className="py-4" >
        <MainRoutes />
      </div>
      <hr/>
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App; 
