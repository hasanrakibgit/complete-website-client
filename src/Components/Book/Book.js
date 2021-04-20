import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import ProcessPayment from '../ProcessPayment/ProcessPayment';
import BookingSideBar from './BookingSidebar/BookingSideBar';
const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black',
}
const paymentStyle = {
    backgroundColor: "white",
    border: '1px solid black',
    width: "600px",
    textAlign: 'center'
}
const Book = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [book, setBook] = useState([]);
    const { serviceId } = useParams();
    
    useEffect(() => {
        fetch('http://localhost:5000/services')

            .then(res => res.json())
            .then(data => setBook(data))
    }, []);

    const result = book.filter(pd => (pd._id == serviceId))
    console.log(result[0])


    const placeBooking = () => {

        
        const newBooking = { ...loggedInUser, ...result, orderTime: new Date() }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully. Go to Booking List for details')
                }
            });

    };



    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <BookingSideBar></BookingSideBar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 ">
                    <h1 className="text-center">Book Here</h1>

                    <div style={{ textAlign: 'center' }}>
                        <h2>Hello {loggedInUser.name}, Thanks for selecting this item.</h2>
                        <h3>You Have select {result[0]?.serviceTitle} </h3>

                        <h4>Total Cost is {result[0]?.cost}</h4>

                        <h1 className="text-center">Add Services</h1>
                        

                        <button onClick={placeBooking}>Submit</button>
                    </div>
                    <div className='m-auto mt-5' style={paymentStyle}>
                        <ProcessPayment></ProcessPayment>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Book;