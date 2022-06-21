import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoplay: 4000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        600: {
            items: 1
        },
        610: {
            items: 2
        },
        800: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
}

const Services2 = () => {
    return (
        <section className="services-section-five">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="image-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-17.png)' }}></div>
                    <div className="sec-title-two light">
                        <div className="title">working process</div>
                        <h2>How we work for customers <br /> to prepare on the requirement</h2>
                    </div>
                    <OwlCarousel className="three-item-carousel owl-theme" {...options}>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-cyber-security"></div>
                                <h5><a href="#">Cyber Security</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-cloud-1"></div>
                                <h5><a href="#">Cloud Computing</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-consulting"></div>
                                <h5><a href="#">IT Consultancy</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-cyber-security"></div>
                                <h5><a href="#">Cyber Security</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-cloud-1"></div>
                                <h5><a href="#">Cloud Computing</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                        {/* Service Block Five */}
                        <div className="service-block-five">
                            <div className="inner-box">
                                <div className="border-layer"></div>
                                <div className="color-layer"></div>
                                <div className="icon flaticon-consulting"></div>
                                <h5><a href="#">IT Consultancy</a></h5>
                                <div className="text">Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.</div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Services2