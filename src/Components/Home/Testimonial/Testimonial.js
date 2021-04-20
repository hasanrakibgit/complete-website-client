import React from 'react';

const Testimonial = ({testimonial}) => {
    
    return (
        
                <div className=" col-md-4  card shadow-sm">
                    <div className="card-body">
                        <p className="card-text text-center">{testimonial.description}</p>
                    </div>
                    <div className="card-footer d-flex  align-items-center">
                        <img className="mx-3" src={`data:image/png;base64,${testimonial.image.img}`} alt="" width="60" />
                        
                        <div>
                            <h6 className="text-success">{testimonial.name}</h6>
                            <p className="m-0">{testimonial.companyNameAndDeg}</p>
                        </div>
                    </div>
                </div>
            
    );
};

export default Testimonial;