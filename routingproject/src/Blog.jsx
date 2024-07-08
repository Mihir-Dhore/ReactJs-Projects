import React from 'react'
import Header from './common/Header'
import { blogs } from "./Data/blogs";
import { Link } from 'react-router-dom';


export default function Blog() {
let allBlogs = blogs.map((item,index)=>{
    return(
        <div className='blogItems' key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button className='ReadMoreButton'><Link to={`/blog/${item.id}`}> Read More </Link></button>
            {/* blog/ is a path defined in index.js file, add this path after `/ */}
        </div>
    )})
  return (
    <>
        <Header/>
        <h1>Blog Page</h1>
        <div className='container'>
            {allBlogs}
        </div>
 
    </>
  )
}
