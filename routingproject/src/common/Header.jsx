import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  // This Component Contain Static Routing And Dynamic Routing(Home, About, Course are Static Routing And In Blog Dynamic Routing is Implemented).
  return (
    <div>
        <h1>Header Part</h1>
        <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/course">Course</Link>
              <Link to="/blog">Blog</Link>

            </ul>
        </nav>
    </div>
  )
}
