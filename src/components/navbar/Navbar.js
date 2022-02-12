import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

const Navbar = () => {

    const [NavToggle, setNavToggle] = useState(false)

    return (
        <div className='navbar'>
            <div className="brand">
                <div className="container">
                    <img src="/assets/logo.png" alt="" />
                    <h3>Travelo</h3>
                </div>

                <div className="toggle">
                    {
                        NavToggle ? <VscChromeClose onClick={() => { setNavToggle(false) }}></VscChromeClose> : <GiHamburgerMenu onClick={() => { setNavToggle(true) }}></GiHamburgerMenu>
                    }
                </div>
            </div>

            <ul className='navbarMainLinks'>
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

            <div className={NavToggle ? 'navbarResponsive navbarResponsiveMotion' : 'navbarResponsive'}>
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
            </div>

            <button>Connect</button>
        </div>
    )
}

export default Navbar