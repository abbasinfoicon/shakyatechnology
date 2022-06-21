import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    margin: 0,
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
        800: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
}


const Query_test = () => {
    return (
        <section className="default-section">
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Form Column */}
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title-two centered">
                                <div className="title">QUERY</div>
                                <h2>Request A Free <br /> Consultation</h2>
                            </div>

                            {/* Default Form */}
                            <div className="default-form">
                                <form method="post" action="http://themerange.net/html/Shakya Technology/appointment.html">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Name" required="" />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required="" />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="tel" name="phone" placeholder="Phone No" required="" />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="department" placeholder="Your Website" required="" />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                                            <button className="theme-btn btn-style-seven" type="submit" name="submit-form"><span className="txt">Submit Now</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Default Form */}

                        </div>
                    </div>
                    {/* Carousel Column */}
                    <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title-two">
                                <div className="title">Our Testimonial</div>
                                <h2>Words From Our Clients</h2>
                            </div>
                            <OwlCarousel className="single-item-carousel owl-theme" {...options}>
                                {/* Testimonial Block Two */}
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="box-inner">
                                                <div className="quote-icon flaticon-quote"></div>
                                                <div className="author-image">
                                                    <img src="assets/images/resource/author-3.jpg" alt="" />
                                                </div>
                                                <h5>Jordan Jack</h5>
                                                <div className="designation">WP Developer</div>
                                            </div>
                                        </div>
                                        <div className="text">I am only use Transida logistics for my shipping needs. My clients have all come to expect excellent shipping & handling of their merchandise.</div>
                                    </div>
                                </div>
                                {/* Testimonial Block Two */}
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="box-inner">
                                                <div className="quote-icon flaticon-quote"></div>
                                                <div className="author-image">
                                                    <img src="assets/images/resource/author-3.jpg" alt="" />
                                                </div>
                                                <h5>Jordan Jack</h5>
                                                <div className="designation">WP Developer</div>
                                            </div>
                                        </div>
                                        <div className="text">I am only use Transida logistics for my shipping needs. My clients have all come to expect excellent shipping & handling of their merchandise.</div>
                                    </div>
                                </div>
                                {/* Testimonial Block Two */}
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="box-inner">
                                                <div className="quote-icon flaticon-quote"></div>
                                                <div className="author-image">
                                                    <img src="assets/images/resource/author-3.jpg" alt="" />
                                                </div>
                                                <h5>Jordan Jack</h5>
                                                <div className="designation">WP Developer</div>
                                            </div>
                                        </div>
                                        <div className="text">I am only use Transida logistics for my shipping needs. My clients have all come to expect excellent shipping & handling of their merchandise.</div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Query_test