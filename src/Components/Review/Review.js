import React, { useState } from 'react';
import BookingSideBar from '../Book/BookingSidebar/BookingSideBar';
const containerStyle = {
    backgroundColor: "#c9f89e",
    border: '1px solid black',
}
const Review = () => {

    const [review, setReview] = useState({});
    const [file, setFile]= useState(null);
    const handleBlur = e=>{
        const newReview = { ...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e)=>{
        const newFile = e.target.files[0];
        setFile(newFile)

    }
    const handleSubmit =() =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('company', review.company);
        formData.append('description', review.description);

        fetch ('http://localhost:5000/addReview',{
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
                    <BookingSideBar></BookingSideBar>
                </div>
                <div className="col-md-10 col-sm-12 col-12 ">
                    <h1 className="text-center">Leave Your valuable Feedback</h1>
                    <form onSubmit={handleSubmit} className='form-control '>

                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" />
                        </div>
                        <div class="mb-3">
                            <label for="company" class="form-label">Company Name and Designation</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="company" />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea onBlur={handleBlur} class="form-control" name="description" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="file" class="form-label">Upload Image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="file" />
                        </div>

                        <button type="submit" class="btn btn-warning">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;

