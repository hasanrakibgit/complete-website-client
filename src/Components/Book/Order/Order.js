import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div style ={{textAlign:'center'}}>
            <h1>You Have ordered {orders.length} items.</h1>
            {
                orders.map(od=> <li><span style={{color:'blue',fontWeight:'bold'}}>Service Name :</span> {od[0]?.serviceTitle} <span style={{color:'blue',fontWeight:'bold'}}>Cost:</span>{od[0]?.cost}  <span style={{color:'blue',fontWeight:'bold'}}>Order Time :</span>{od.orderTime}</li>)
            }
        </div>
    );
};

export default Order;