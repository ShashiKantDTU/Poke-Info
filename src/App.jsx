import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home.jsx';
import PokemonDetails from './pages/PokemonDetails.jsx';
import NewPokemonCard from './pages/NewPokemonCard.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Home />,
      errorElement: <PageNotFound />,
      
    },
    {
      path: '/pokemon/:id', element: <PokemonDetails />,
    },
    {
      path: '/n' , element: <NewPokemonCard />,
    }

    
  ]);
  return (
    <>
      <RouterProvider router={router} />
      
    </>

  )
}

export default App;
