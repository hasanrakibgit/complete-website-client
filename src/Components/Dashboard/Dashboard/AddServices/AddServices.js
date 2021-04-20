import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';


const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black'
}
const AddServices = () => {
    const [serviceData, setServiceData] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e =>{
        const newServiceData = {...serviceData};
        newServiceData[e.target.name] = e.target.value;
        setServiceData(newServiceData);
    }

    const handleFileChange = (e)=>{
        const newFile = e.target.files[0];
        setFile(newFile)

    }

    const handleSubmit =() =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('serviceTitle', serviceData.serviceTitle);
        formData.append('cost', serviceData.cost);
        formData.append('description', serviceData.description);

        fetch('http://localhost:5000/addService', {
            method:'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error =>{
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
                    <h1 className="text-center">Add Services</h1>
                    <form  onSubmit ={handleSubmit} className='form-control '>
                        
                            <div class="mb-3">
                                <label for="serviceTitle" class="form-label">Service Title</label>
                                <input onBlur={handleBlur} type="text"  class="form-control" name="serviceTitle"/>
                            </div>
                            <div class="mb-3">
                                <label for="cost" class="form-label">Cost</label>
                                <input onBlur={handleBlur} type="text" class="form-control" name="cost"/>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Add Description</label>
                                <textarea onBlur={handleBlur} class="form-control" name="description" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="file" class="form-label">Upload Image</label>
                                <input onChange={handleFileChange} type="file" class="form-control" id="file"/>
                            </div>
                                
                                    <button type="submit" class="btn btn-warning">Add Service</button>
                    </form>
                 </div>

             </div>
        </section>
    );
};

export default AddServices;