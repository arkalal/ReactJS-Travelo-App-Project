import React, { useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {

    const [Scroll, setScroll] = useState(false)

    return (
        <div className={Scroll ? 'scrollToTopBlock scrollToTop' : 'scrollToTopNone scrollToTop'}>
            <img src="/assets/logo.png" alt="" />
        </div>
    )
}

export default ScrollToTop