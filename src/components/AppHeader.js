import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  return (
    <header className="app-header">
        <NavLink to="/"> 
          <img className="app-header-logo" src="./images/logo.jpg"></img> 
        </NavLink>
        
        <NavLink to="/" style={{ textDecoration: "none", color: "black"}}>
          <h4>Fruit Long Cheese</h4>
        </NavLink>
    </header>
  );
}

export default AppHeader;
