import React, { useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {

    const [Scroll, setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        window.scrollY > 200 ? setScroll(true) : setScroll(false)
    })

    const toTop = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <div onClick={toTop} className={Scroll ? 'scrollToTopBlock scrollToTop' : 'scrollToTopNone scrollToTop'}>
            <img src="/assets/logo.png" alt="" />
        </div>
    )
}

export default ScrollToTop