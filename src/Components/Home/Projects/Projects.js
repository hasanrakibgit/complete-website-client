import React from 'react';
import solar from '../../../images/Solar panel.jpg';
import plant from '../../../images/development.jpg';
import backyard from '../../../images/backyard.png';
import roof from '../../../images/rooftop.jpg';
import './Projects.css'
const Projects = () => {
    return (
        <div className=" container-fluid projects">

        
        <section className=" container  ">
            <h1 className=" text-center  mt-5 pt-5 ">Our Projects</h1>
            <div className="  d-flex justify-content center mt-5">
                
                <div className="row">
                    <div className="col-md-3 " >
                    <div className="photo-frame">
                            <div className="photo">
                                <img src={solar} alt="" srcset="" />
                            </div>
                            <div className="photo-detail">
                                <h3>SOLAR PANEL <br></br>Solar Panel</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem eos animi iure sunt quisquam quaerat, cumque, quod pariatur, quia cupiditate nemo ab magnam. Minus ab adipisci facilis ipsam nam amet veniam! Ex vero, ea impedit molestiae pariatur aut vel?</p>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-3 text-center" >
                        <div className="photo-frame">
                            <div className="photo">
                                <img src={plant} alt="" srcset="" />
                            </div>
                            <div className="photo-detail">
                                <h3>NEW PLANT <br></br>New Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem eos animi iure sunt quisquam quaerat, cumque, quod pariatur, quia cupiditate nemo ab magnam. Minus ab adipisci facilis ipsam nam amet veniam! Ex vero, ea impedit molestiae pariatur aut vel?</p>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-3 text-center" >
                        <div className="photo-frame">
                            <div className="photo">
                                <img src={backyard} alt="" srcset="" />
                            </div>
                            <div className="photo-detail">
                                <h3>MAINTAINANCE <br></br>Backyard Area</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem eos animi iure sunt quisquam quaerat, cumque, quod pariatur, quia cupiditate nemo ab magnam. Minus ab adipisci facilis ipsam nam amet veniam! Ex vero, ea impedit molestiae pariatur aut vel?</p>
                            </div>


                        </div>

                    </div>
                    <div className="col-md-3 text-center" >
                        <div className="photo-frame">
                            <div className="photo">
                                <img src={roof} alt="" srcset="" />
                            </div>
                            <div className="photo-detail">
                                <h3>HOME <br></br>Roof Seller</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem eos animi iure sunt quisquam quaerat, cumque, quod pariatur, quia cupiditate nemo ab magnam. Minus ab adipisci facilis ipsam nam amet veniam! Ex vero, ea impedit molestiae pariatur aut vel?</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </section>
        </div>
    );
};

export default Projects;