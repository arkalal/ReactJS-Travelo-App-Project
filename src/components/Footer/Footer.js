import React from 'react'
import './Footer.css'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <span>Copyright &copy; 2021 Travelo. Developed By Arka Lal Chakravarty</span>

            <ul>
                <li>
                    <a href="#Home">Home</a>
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

            <ul>
                <li> <BsFacebook></BsFacebook> </li>
                <li> <BsLinkedin></BsLinkedin> </li>
                <li> <AiFillInstagram></AiFillInstagram> </li>
            </ul>
        </div>
    )
}

export default Footer