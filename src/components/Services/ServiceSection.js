import React from 'react'
import './ServiceSection.css'

const ServiceSection = ({ icon, title, subTitle }) => {
    return (
        <div className='serviceSection'>
            <div className="service">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>

                <h3> {title} </h3>
                <p> {subTitle} </p>
            </div>
        </div>
    )
}

export default ServiceSection