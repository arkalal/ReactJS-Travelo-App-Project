import React, { useState } from 'react'
import './Recommendation.css'

const Recommendation = () => {

    const data = [
        {
            image: '/assets/Destination1.png',
            title: "Singapore",
            subTitle: "Singapore, officialy thr Republic of Singapore, is a",
            cost: "38,800",
            duration: "Approx 2 night trip",
        },
        {
            image: '/assets/Destination2.png',
            title: "Thailand",
            subTitle: "Thailand is a Southeast Asia country. It's known for",
            cost: "54,200",
            duration: "Approx 2 night trip",
        },
        {
            image: '/assets/Destination3.png',
            title: "Paris",
            subTitle: "Paris, France's capital, is a major European city and a",
            cost: "45,500",
            duration: "Approx 2 night trip",
        },
        {
            image: '/assets/Destination4.png',
            title: "New Zealand",
            subTitle: "New Zealand is an island country in the",
            cost: "24,100",
            duration: "Approx 1 night trip",
        },
        {
            image: '/assets/Destination5.png',
            title: "Bora Bora",
            subTitle: "Bora Bora is a small South Pacific island northwest of",
            cost: "95,400",
            duration: "Approx 2 night 2 day trip",
        },
        {
            image: '/assets/Destination6.png',
            title: "London",
            subTitle: "London, the capital of England and the United",
            cost: "38,800",
            duration: "Approx 3 night 2 day trip",
        },
    ];

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
    ];

    const [Active, setActive] = useState(1)

    return (
        <div className='RecommendationSection'>
            <div className="title">
                <h2>Recommended Destinations</h2>
            </div>

            <div className="packages">
                <ul>
                    {
                        packages.map((pkg, index) => {
                            return <>
                                <li className={Active === index + 1 ? 'Recommendationactive' : ''} onClick={() => { setActive(index + 1) }}> {pkg} </li>
                            </>
                        })
                    }
                </ul>
            </div>

            <div className="destinations">
                {
                    data.map((DesInfo) => {
                        return <>
                            <div className="destination">
                                <img src={DesInfo.image} alt="" />
                                <h3> {DesInfo.title} </h3>
                                <p> {DesInfo.subTitle} </p>

                                <div className="info">
                                    <div className="services">
                                        <img src="/assets/info1.png" alt="" />
                                        <img src="/assets/info2.png" alt="" />
                                        <img src="/assets/info3.png" alt="" />
                                    </div>

                                    <h4> {DesInfo.cost} </h4>
                                </div>

                                <div className="distance">
                                    <span>1000 Kms</span>
                                    <span> {DesInfo.duration} </span>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Recommendation