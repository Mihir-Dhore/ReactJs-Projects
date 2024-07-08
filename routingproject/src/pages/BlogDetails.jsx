import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2]; //Get Path Name And its Id From here
    let currentData = blogs.filter((item)=> item.id == currentId)[0] //Filter Record Based on the currentId
    console.log('currentData: ',currentData);
  return (
    <>
       <Header/>
       <h1>Blog Number: {currentData.id}</h1>
       <h3>{currentData.title}</h3>
       <p>{currentData.body}</p>
    </>
  )
}
