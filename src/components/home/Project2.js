import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options1 = {
    loop: true,
    items: 1,
    margin: 0,
    nav: false,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000
}
const options2 = {
    loop: true,
    margin: 25,
    items: 1,
    nav: false,
    navText: ['<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>'],
    dots: true,
    center: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2,
            autoWidth: false
        },
        400: {
            items: 3,
            autoWidth: false
        },
        600: {
            items: 3,
            autoWidth: false
        },
        1000: {
            items: 3,
            autoWidth: false
        },
        1200: {
            items: 3,
            autoWidth: false
        }
    },
}

const Project2 = () => {
    return (
        <section className="projects-section-two">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-19.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title-two centered">
                    <div className="title">RECENT PROJECTS</div>
                    <h2>Our Latest Case Studies</h2>
                </div>
                <div className="inner-container">
                    <div className="title-box">
                        <div className="title">IT Technology</div>
                        <h2>Analytic Solution</h2>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
                        <div className="btns-box">
                            <a href="#" className="theme-btn read-more-btn"><span className="txt">Read More</span></a>
                        </div>
                    </div>
                    <div className="testimonial-outer">

                        {/* Client Testimonial Carousel */}
                        <OwlCarousel className="client-testimonial-carousel owl-theme" {...options1}>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                            {/* Case Image Block */}
                            <div className="case-image-block">
                                <div className="inner-box">
                                    <img src="assets/images/resource/project-1.jpg" alt="" />
                                </div>
                            </div>

                        </OwlCarousel>

                        {/* Product Thumbs Carousel */}
                        <div className="client-thumb-outer">
                            <OwlCarousel className="client-thumbs-carousel owl-theme" {...options2}>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-1.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-2.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-3.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-1.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-2.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-3.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-1.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-2.jpg" alt="" /></figure>
                                </div>
                                <div className="thumb-item">
                                    <figure className="thumb-box"><img src="assets/images/resource/project-thumb-3.jpg" alt="" /></figure>
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project2