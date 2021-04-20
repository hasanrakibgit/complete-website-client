import React, { useEffect, useState } from 'react';
import image from '../../../images/giphy.gif';
import ServicesDetail from '../ServicesDetail/ServicesDetail';





const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceData(data));

    }, []);
    return (
        <section className="container">
            <div className="text-center mt-5 pb-3">
                <h5  className="text-danger">Our Services</h5>
                <h1>Our Best Services</h1>
            </div>
            <div className='d-flex justify-content-center' >
                <div className="row mt-5" >
                    {
                        serviceData.length === 0 && <img src={image} alt="" />
                    }
                    {
                        serviceData.map(service => <ServicesDetail service={service} key={service._id}></ServicesDetail>)
                    }

                </div>

            </div>


        </section>

    );
};

export default Services;