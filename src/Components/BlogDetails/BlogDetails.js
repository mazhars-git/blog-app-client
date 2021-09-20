import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MainMenu from '../MainMenu/MainMenu';

const BlogDetails = () => {
    const {_id} = useParams();
    const [blogDetails, setBlogDetails] = useState([]);

    const {title, content, image} = blogDetails;

    useEffect(() => {
        fetch(`http://localhost:5000/details/${_id}`)
        .then(res => res.json())
        .then(data => setBlogDetails(data))

    }, []);

    console.log(blogDetails)
    return (
        <section className="container">
            <MainMenu />
            <div className="row py-5">
                <img className="img-fluid" src={`data:image/png;base64, ${image}`} />
                <h2 className="text-center py-3">{title}</h2>
                <p>{content}</p>
            </div>
        </section>
    );
};

export default BlogDetails;