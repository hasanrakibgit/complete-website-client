import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../Book/Book';
import './ServicesDetail.css'

const ServicesDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center ">
            <div className="service-image">
                <img src={`data:image/svg+xml;base64,${service.image.img}`} alt="" />
            </div>
            
                <h3>{service.serviceTitle}</h3>
                <h4>{service.cost}</h4>
                <p>{service.description}</p>
                
                
                
          

            <h3><Link to={`/book/${service._id}`}><button className='btn btn-warning'>Book For Services</button></Link></h3>
           

        </div>
    );
};

export default ServicesDetail;