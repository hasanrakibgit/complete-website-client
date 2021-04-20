import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AllOrder from '../AllOrder/AllOrder';


const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black'
}
const OrderList = () => {


    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12 ">
                <h1 className="text-center">Order List</h1>
                <AllOrder></AllOrder>

            </div>

        </div>
    </section>
    );
};

export default OrderList;