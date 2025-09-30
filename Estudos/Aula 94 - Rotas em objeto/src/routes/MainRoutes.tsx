import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../RequireAuth';

export const MainRoutes = () => {
    return useRoutes([  //Dessa forma é possível fazer toda a estrutura do Routes e Route usando apenas o componente useRoutes. Essa é apenas uma outra forma de ser feito.
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
      { path: '/sobre/:slug', element: <AboutItem /> },
      { path: '*', element: <NotFound /> }
    ]);
    /*
    return (
        <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/sobre' element={
        <RequireAuth>
          <About />
        </RequireAuth>
        } />
        <Route path='/sobre/:slug' element={<AboutItem />} />
        <Route path='*' element={<NotFound />}/> 
    </Routes>
    );*/
}