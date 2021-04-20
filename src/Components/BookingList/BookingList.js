import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BookingSideBar from '../Book/BookingSidebar/BookingSideBar';
import Order from '../Book/Order/Order';


const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black',
}

const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <BookingSideBar></BookingSideBar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 ">
                    <h1 className="text-center">Booking List</h1>

                    <div style={{ textAlign: 'center' }}>
                        <h2>Hello {loggedInUser.name}, Thanks for selecting this items.</h2>
                       <Order></Order>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingList;