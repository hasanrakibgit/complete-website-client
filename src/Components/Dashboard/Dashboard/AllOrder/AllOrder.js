import React, { useEffect, useState } from 'react';

const AllOrder = () => {

    const [allOrder, setAllOrder]= useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])
    return (
        <div style ={{textAlign:'center'}}>
           <h1>Total number of Orders is {allOrder.length} items.</h1> 
           {
               allOrder.map(ao => <li><span style={{color:'blue',fontWeight:'bold'}}>Service Name :</span> {ao[0]?.serviceTitle} <span style={{color:'blue',fontWeight:'bold'}}>Cost:</span>{ao[0]?.cost}  <span style={{color:'blue',fontWeight:'bold'}}>Order Time :</span>{ao.orderTime}</li>)
           }
        </div>
    );
};

export default AllOrder;