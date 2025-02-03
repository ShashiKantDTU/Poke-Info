import { NavLink, Link, Outlet } from 'react-router-dom';
import './Pokemon.css';
function Pokedmon() {
  const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return <div> <h1>Welcome to the Pokedex!</h1>
    <div className='navi'>
      <NavLink to="/">Go back to the home page</NavLink>
      <div >
        {links.map((link, index) => <NavLink key={index} to={`/pokemon/${link}`}>Pokemon {link}</NavLink>)}
      </div>
    </div>
    <Outlet />
  </div>
}

export default Pokedmon;
