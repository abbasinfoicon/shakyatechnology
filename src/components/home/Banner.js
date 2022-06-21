import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    smartSpeed: 500,
    autoplay: 6000,
    navText: ['<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>']
}

const Banner = () => {
    return (
        <section className="banner-section-four">
            <OwlCarousel className="main-slider-carousel owl-theme" {...options}>

                <div className="slide" style={{ backgroundImage: "url(assets/images/main-slider/image-3.jpg)" }}>
                    <div className="auto-container">

                        {/* Content Column */}
                        <div className="content-box">
                            <div className="inner-box">
                                <div className="title">We Increase your</div>
                                <h1>Business Success</h1>
                                <div className="text">Using Modern Technology and IT Services</div>
                                <div className="btns-box">
                                    <a href="#" className="theme-btn btn-style-six"><span className="txt">Free Consultation</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="slide" style={{ backgroundImage: "url(assets/images/main-slider/image-3.jpg)" }}>
                    <div className="auto-container">

                        {/* Content Column */}
                        <div className="content-box">
                            <div className="inner-box">
                                <div className="title">We Increase your</div>
                                <h1>Business Success</h1>
                                <div className="text">Using Modern Technology and IT Services</div>
                                <div className="btns-box">
                                    <a href="#" className="theme-btn btn-style-six"><span className="txt">Free Consultation</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="slide" style={{ backgroundImage: "url(assets/images/main-slider/image-3.jpg)" }}>
                    <div className="auto-container">

                        {/* Content Column */}
                        <div className="content-box">
                            <div className="inner-box">
                                <div className="title">We Increase your</div>
                                <h1>Business Success</h1>
                                <div className="text">Using Modern Technology and IT Services</div>
                                <div className="btns-box">
                                    <a href="#" className="theme-btn btn-style-six"><span className="txt">Free Consultation</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </OwlCarousel>
        </section>
    )
}

export default Banner