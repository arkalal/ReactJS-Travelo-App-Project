import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonialSection'>
            <div className="testimonialTitle">
                <h2>Happy Customers</h2>
            </div>

            <div className="testimonials">
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src="/assets/avatarImage.jpeg" alt="" />

                        <div className="testimonialDetails">
                            <h4>Kishan Seth</h4>
                            <span>CEO - Sashan Web Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src="/assets/avatarImage.jpeg" alt="" />

                        <div className="testimonialDetails">
                            <h4>Kishan Seth</h4>
                            <span>CEO - Sashan Web Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="testimon">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, molestias.</p>

                    <div className="testimonialInfo">
                        <img src="/assets/avatarImage.jpeg" alt="" />

                        <div className="testimonialDetails">
                            <h4>Kishan Seth</h4>
                            <span>CEO - Sashan Web Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials