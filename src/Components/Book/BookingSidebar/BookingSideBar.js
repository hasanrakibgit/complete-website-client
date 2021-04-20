import React from 'react';
import './BookingSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLock, faShoppingCart,faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom';

const BookingSideBar = () => {
    const { serviceId } = useParams();
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
           
            <li>
                <Link to="/book/:" className="text-dark">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                </Link>
            </li>
            <li>
                    <Link to="/bookingList" className="text-dark" >
                        <FontAwesomeIcon icon={faLock} /> <span>Booking List</span>
                    </Link>
                </li>
            
                <li>
                    <Link to="/reviews" className="text-dark" >
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
                
                
            
        </ul>
        
    </div>
    );
};

export default BookingSideBar;