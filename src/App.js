import React from 'react'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Recommendation from './components/Recommendation/Recommendation'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Recommendation></Recommendation>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    )
}

export default App