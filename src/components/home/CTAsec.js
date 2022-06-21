import React from 'react'

const CTAsec = () => {
    return (
        <section className="cta-section-two" style={{ backgroundImage: 'url(assets/images/background/1.png)' }}>
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Content Column */}
                    <div className="content-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="icon flaticon-web-development"></div>
                            <div className="title">CALL US 24/7</div>
                            <a className="phone" href="tel:+1-800-456-789">+1 (800) 456 789</a>
                            <div className="text">Have any idea or project for in your mind call us or schedule <br /> a appointment. Our representative will reply you shortly.</div>
                            <a href="contact.html" className="theme-btn btn-style-two"><span className="txt">Lets Talk</span></a>
                            <div className="counter-boxed" style={{ backgroundImage: 'url(assets/images/background/pattern-5.jpg)' }}>

                                {/* Fact Counter Two */}
                                <div className="fact-counter-two">
                                    <div className="row clearfix">

                                        {/* Column */}
                                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner">
                                                <div className="content">
                                                    <div className="count-outer count-box alternate">
                                                        <span className="count-text" data-speed="2000" data-stop="80">0</span>K
                                                    </div>
                                                    <h5 className="counter-title">Happy Clients</h5>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Column */}
                                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner">
                                                <div className="content">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="2000" data-stop="70">0</span>
                                                    </div>
                                                    <h5 className="counter-title">Companies</h5>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Column */}
                                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner">
                                                <div className="content">
                                                    <div className="count-outer count-box">
                                                        <span className="count-text" data-speed="4000" data-stop="390">0</span>+
                                                    </div>
                                                    <h5 className="counter-title">Projects Completed</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Image Column */}
                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <img src="assets/images/resource/cta.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTAsec