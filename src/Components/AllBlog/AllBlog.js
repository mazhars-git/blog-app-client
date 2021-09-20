import React, { useEffect, useState } from 'react';
import BlogContent from './BlogContent';

const AllBlog = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        fetch('https://floating-atoll-04601.herokuapp.com/contents')
        .then(res => res.json())
        .then(data => setBlogItems(data))
    }, []);

    return (
        <section className="container py-5">
            <div className="row">
                {
                    blogItems.map(item => <BlogContent item={item} key={item._id}></BlogContent>)
                }
            </div>
        </section>
    );
};

export default AllBlog;