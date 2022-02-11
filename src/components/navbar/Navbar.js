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
                    <a className='activeA' href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Home">Services</a>
                </li>
                <li>
                    <a href="#Home">Places</a>
                </li>
                <li>
                    <a href="#Home">Testimonials</a>
                </li>
            </ul>

            <button>Connect</button>
        </div>
    )
}

export default Navbar