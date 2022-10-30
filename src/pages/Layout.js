import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
        <nav class="navbar navbar-expand-sm bg-primary">
          <div class="container-fluid justify-content-center">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blogs">Current Listings</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    
        <Outlet />
        </>
  )
};

export default Layout;