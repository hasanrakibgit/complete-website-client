import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        
        {name: "Home" , link: "/home"},
        {name: "Login" , link: "/login"},
        {name: "Admin" , link: "/admin"},
        {name: "Review" , link: "/reviews"},
        
    ]
    const ourAddress = [
        {name: "TB gate,Mohakhali, Dhaka" , link: "//google.com/map"},
        {name: "Bangladesh" , link: "//google.com/map"},
       
    ]
    
    const Admin = [
        {name: "Login" , link: "/Login"},
        {name: "Manage Service" , link: "/#"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Admin" menuItems={Admin}/>
                  
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon " icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">+8801727020294</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;