import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black'
}
const MakeAdmin = () => {

    const [adminMail, setAdminEmail] = useState([]);
    const handleBlur =e =>{
        const newAdminMail = {...adminMail};
        newAdminMail[e.target.name] = e.target.value;
        setAdminEmail(newAdminMail);
    }

const handleSubmit =() =>{
    const formData = new FormData()
    formData.append('email', adminMail.email);
    fetch('http://localhost:5000/addAdmin', {
        method:'POST',
        body: formData
    })
    .then(response => response.json())
    .then (data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 ">
                    <h1 className="text-center">Create Admin</h1>
                    <form onSubmit={handleSubmit} className='form-control '>

                        <div class="mb-3">
                            <label for="email" class="form-label">Enter Mail ID</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" />
                        </div>
                        <button type="submit" class="btn btn-warning">Submit</button>
                    </form>


                </div>

            </div>
        </section>
    );
};

export default MakeAdmin;


