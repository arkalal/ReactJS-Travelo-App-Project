import React from 'react'
import './Services.css'
import ServiceSection from './ServiceSection'

const Services = () => {
    return (
        <div className='parentServiceSection'>
            <ServiceSection icon='/assets/service1.png' title="Get Best Prices" subTitle="Pay through our application and save thousands and get amazing rewards."></ServiceSection>

            <ServiceSection icon='/assets/service2.png' title="Covid Safe" subTitle="We have all the curated hotels that have all the precaution for a covid safe environment."></ServiceSection>

            <ServiceSection icon='/assets/service3.png' title="Flexible Payment" subTitle="Enjoy the flexible payment through our app and get rewards on every payment."></ServiceSection>

            <ServiceSection icon='/assets/service4.png' title="Find The Best Near You" subTitle="Find the best hotels and places to visit near you in a single click."></ServiceSection>
        </div>
    )
}

export default Services