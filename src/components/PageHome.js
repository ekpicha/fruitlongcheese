import './Page.css';
import { NavLink, Link } from 'react-router-dom';

function PageHome() {
  return (
    <div className="page-home">
      <h1>test</h1>
      <div className="page-home-navlink">
        <NavLink to="/fruits" style={{ textDecoration: "none", color: "black"}}>
          <h4>PageHome</h4>
        </NavLink>
      </div>
    </div>
    
  );
}

export default PageHome;
