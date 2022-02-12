import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="brand">
                <div className="container">
                    <img src="/assets/logo.png" alt="" />
                    <h3>Travelo</h3>
                </div>

                <div className="toggle"></div>
            </div>

            <ul>
                <li>
                    <a className='NavLiActiveA' href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Services">Services</a>
                </li>
                <li>
                    <a href="#Places">Places</a>
                </li>
                <li>
                    <a href="#Testimonials">Testimonials</a>
                </li>
            </ul>

            <button>Connect</button>
        </div>
    )
}

export default Navbar