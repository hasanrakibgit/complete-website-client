import React from 'react';
import Services from '../Services/Services';
import Header from '../Header/Header';

import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
            <Contact></Contact>
           
            <Footer></Footer>

        </div>
    );
};

export default Home;