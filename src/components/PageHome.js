import './Page.css';
import { NavLink, Link } from 'react-router-dom';

function PageHome() {
  return (
    <div className="page-home">
      <div className="page-home-topic">
        <h1>Benefits Of Fruits</h1>
      </div>
      <div className="page-home-navlink">
        <NavLink to="/fruits"> 
            <img className="page-home-navlink-image" src="./images/fruit_wallpaper.gif"></img> 
        </NavLink>
        {/* <NavLink to="/fruits" style={{ textDecoration: "none", color: "black"}}> */}
        {/* </NavLink> */}
      </div>
      <div className="page-home-text">
        <h4>** Click image to go Fruits page **</h4>
      </div>
    </div>
  );
}

export default PageHome;
