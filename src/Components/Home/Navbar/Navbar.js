import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                                <a class="navbar-brand" href="#">
                                    <img src={logo} alt="" width="70" height="48"/>
                                </a>
                           
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            
                                <li class="nav-item">
                                    <Link to="/home"><a class="nav-link ms-5 active" aria-current="page" href="/home">Home</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to ='/reviews'><a class="nav-link ms-5" href="#">Review Us</a></Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ms-5 " href="#">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ms-5 " href="#">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <Link to ="/admin"><a class="nav-link ms-5 " href="">Admin</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link  to="/login"><a class="nav-link ms-5 " href="/login">Login {loggedInUser.name}</a></Link> 
                               </li>

                        </ul>

                    </div>
                    </div>
            </nav>
        </div>
    );
};

export default Navbar;