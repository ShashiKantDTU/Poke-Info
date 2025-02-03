import {Link} from 'react-router-dom';
function PageNotFound() {
  return <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  
}

export default PageNotFound;