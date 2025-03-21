import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
        aria-label="Second navbar example"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link " aria-current="page">
                  About
                </NavLink>
              </li>
              <NavLink to="/contact" className="nav-link " aria-current="page">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
