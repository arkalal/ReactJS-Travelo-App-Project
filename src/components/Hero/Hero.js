import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='sectionHero'>
            <div className="background">
                <img src="/assets/hero.png" alt="" />
            </div>

            <div className="content">
                <div className="title">
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi est ullam, laudantium </p>
                </div>

                <div className="search">
                    <div className="container">
                        <label htmlFor="headText">Where you want to go</label>
                        <input type="text" id='headText' placeholder='Search your Location' />
                    </div>
                    <div className="container">
                        <label htmlFor="checkIn">Check-In</label>
                        <input id='checkIn' type="date" />
                    </div>
                    <div className="container">
                        <label htmlFor="checkOut">Check-Out</label>
                        <input id='checkOut' type="date" />
                    </div>

                    <button>Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero