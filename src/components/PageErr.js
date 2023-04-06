import { NavLink } from 'react-router-dom';
import './Page.css';

function PageErr() {
  return (
    <div className="page-err">
      <h4>PageErr 404</h4>
      <div className="page-err-navlink">
        <NavLink to="/" style={{ textDecoration: "none", color: "black"}}>
          กดเพื่อกลับหน้า Homepage
        </NavLink>
      </div>
    </div>
  );
}

export default PageErr;
