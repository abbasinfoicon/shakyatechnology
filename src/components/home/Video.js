import React from 'react'

const Video = () => {
    return (
        <section className="video-section" style={{ backgroundImage: 'url(assets/images/background/4.jpg)' }}>
            <div className="auto-container">
                <div className="content-box">
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image video-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                    <h2>We Provide Outsourced IT Services For <br /> Small & Mid-Sized Business</h2>
                    <div className="text">Appropriate for your specific business, making it easy for you to <br /> have quality IT services. What We Do</div>
                    <a href="#" className="read-more theme-btn">Read More</a>
                </div>
            </div>
        </section>
    )
}

export default Video