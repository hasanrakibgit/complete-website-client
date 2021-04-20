import React from 'react';
import ReactPlayer from "react-player";
const containerStyle = {
    backgroundColor: "#fff45c",
   
}
const WhyChooseUs = () => {
    return (
        <section style={containerStyle}>
            <div className="container">
                <div className="text-center mt-5 pb-3">
                    <h5 className="text-danger pt-5">More About Us</h5>
                    <h1>Why Choose Us</h1>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <div className="col-md-6 col-sm-12 py-5">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=k6veDQ6nWUQ"
                        />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h3 className='text-center'>We are expert at</h3>
                        <div className='mx-5 px-4 py-4 '>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.</li>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyChooseUs;