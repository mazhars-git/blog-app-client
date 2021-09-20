import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/BlogContent.css';

const BlogContent = (props) => {
    const {title, image, _id} = props.item;
    return (
        <div className="col-md-4 align-self-center">
            <Link to={`/details/${_id}`}>
                <div className="blog-item text-center">
                    <img className="img-fluid pb-2" src={`data:image/png;base64, ${image.img}`} />
                    <h5>{title}</h5>
                </div>
            </Link>
        </div>
    );
};

export default BlogContent;