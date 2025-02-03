import {Link, Outlet} from 'react-router-dom';

function Home() {
  const links = [1,2,3,4,5,6,7,8,9,10]

    return <div> <h1>Welcome to the Pokedex!</h1>
            <Link to="/">Go back to the home page</Link>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {links.map((link, index) => <Link key={index} to={`/pokemon/${link}`}>Pokemon {link}</Link>)}
            </div>
            <Outlet/>
            </div>
  }
  
  export default Home;
  