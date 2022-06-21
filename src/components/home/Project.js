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
            items: 2
        },
        800: {
            items: 3
        },
        1024: {
            items: 3
        }
    }
}

const Project = () => {
    return (
        <section className="projects-section">
            <div className="auto-container">
                <div className="sec-title">
                    <div className="clearfix">
                        <div className="pull-left">
                            <div className="title">Featured Projects</div>
                            <h2>Our Latest Works <br /> Watch Now</h2>
                        </div>
                        <div className="pull-right">
                            <div className="btn-box">
                                <a href="projects.html" className="theme-btn btn-style-one"><span className="txt">More Projects</span></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="inner-container">
                    <OwlCarousel className="project-carousel owl-theme" {...options}>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/1.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Analytic Solution</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/2.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Growth Strategies</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/3.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Cloud Computing</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/4.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Business Growth</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/1.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/1.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Analytic Solution</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/2.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/2.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Growth Strategies</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/3.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/3.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Cloud Computing</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block */}
                        <div className="gallery-block">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/gallery/4.jpg" alt="" />
                                    {/* Overlay Box */}
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <div className="content">
                                                <a href="assets/images/gallery/4.jpg" data-fancybox="gallery" data-caption="" className="icon flaticon-plus-symbol"></a>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <div className="lower-content">
                                    <div className="content">
                                        <h5><a href="projects-detail.html">Business Growth</a></h5>
                                        <div className="title">IT Technology</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Project