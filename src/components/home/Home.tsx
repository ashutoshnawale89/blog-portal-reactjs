import React from 'react';
import './Home.css';
import BlogCard from '../blogcard/BlogCard';

function Home() {
    return (
        <>
            <div className="parent">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>

    );
}

export default Home;