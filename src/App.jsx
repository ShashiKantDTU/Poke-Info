import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home.jsx';
import PokemonDetails from './pages/PokemonDetails.jsx';
import NewPokemonCard from './pages/NewPokemonCard.jsx';
import { SpeedInsights } from "@vercel/speed-insights/next"
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
      <SpeedInsights></SpeedInsights>
    </>

  )
}

export default App;
