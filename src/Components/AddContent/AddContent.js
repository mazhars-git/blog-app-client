import React, { useState } from 'react';

const AddContent = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(' ');

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('content', info.content);

        fetch('http://localhost:5000/addContent', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <section className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <h2 className="text-center">Add your content</h2>
                   
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="title" class="form-label">Blog Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Blog Title" />
                        </div>

                        <div class="mb-3">
                            <label for="content" class="form-label">Blog Content</label>
                            <textarea onBlur={handleBlur} class="form-control" name="content" rows="5" placeholder="Blog content....."></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="file" class="form-label">Upload image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
        </section>
    );
};

export default AddContent;