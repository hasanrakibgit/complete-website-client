import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import image from '../../../../images/giphy.gif';


const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black'
}
const ManageService = () => {

    const [manageService, setManageService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageService')
            .then(res => res.json())
            .then(data => setManageService(data))
    }, []);

    const deleteProduct = id => {

        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log('service deleted', result)
            })
        console.log('button clicked', id)

    }

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 ">
                    <h1 className="text-center">Manage Services</h1>
                    <div style={{ textAlign: 'center' }}>
                        {
                            manageService.length === 0 && <img src={image} alt="" />
                        }
                    </div>
                    {

                        manageService.map(ms => <li> Service Name : {ms.serviceTitle} Cost : {ms.cost}
                            <button onClick={() => deleteProduct(ms._id)} >   Delete   </button> </li>)

                    }

                </div>

            </div>
        </section>
    );
};

export default ManageService;