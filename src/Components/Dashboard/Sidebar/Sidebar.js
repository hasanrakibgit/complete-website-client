import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faGripHorizontal, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">


                { isAdmin ?<div>
                    <li>
                        <Link to="/orderList" className="text-dark">
                            <FontAwesomeIcon icon={faLock} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addServices" className="text-dark" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/makeAdmin" className="text-dark" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-dark">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div>
                : <h3>Please Log in as admin for  Admin dashboard</h3>
                }                          

            </ul>

        </div>
    );
};

export default Sidebar;