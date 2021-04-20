import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import image from '../../../images/giphy.gif';


const Testimonials = () => {

    const [testimonialData, setTestimonialData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
            .then(data => setTestimonialData(data));
    }, []);

    return (
    <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="text-center">
                   <h5 className="text-danger text-uppercase">Testimonial</h5>
                   <h1>What Our Customer <br/> Says </h1>
               </div>
               <div className="d-flex  justify-content-center mt-5">
                   <div className="row">
                   {
                        testimonialData.length === 0 && <img src={image} alt="" />
                    }
                   {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                   </div>
                    
                </div>
           </div>
       </section>
    );
};

export default Testimonials;