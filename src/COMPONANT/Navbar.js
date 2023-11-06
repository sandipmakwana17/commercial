import React from 'react';
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    
    <div className='navbar'>
     <nav className ="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <a className="navbar-brand" href="#">  <img src="../img/Group 8 9.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav m-auto ">
                    <li className="nav-item active ">
                    <Link className='nav-link text-white navbarr' to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                    <Link className='nav-link text-white navbarr' to="/AboutUs">AboutUs</Link>
                    </li>

                    <li className="nav-item">
                    <Link className='nav-link text-white navbarr' to="/Shop">Shop</Link>
                    </li>

                    <li className="nav-item">
                    <Link className='nav-link text-white navbarr' to="/Blog">Blog</Link>
                    </li>

                    <li className="nav-item">
                    <Link className='nav-link text-white navbarr' to="/ContactUs">ContactUs</Link>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0 " >
                <i className="p-2 fa-solid fa-magnifying-glass icon" style={{ fontSize: "25px" }}></i>
                <i className="icon p-2 fa-solid fa-cart-shopping" style={{ fontSize: "25px" }}></i>
                <i className="icon p-2 fa-solid fa-user" style={{ fontSize: "25px" }}></i>

                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </div>
        </nav>
       
    </div>
  
  );
};

export default Navbar;
