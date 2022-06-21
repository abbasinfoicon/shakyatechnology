import React from 'react'

const Newsletter = () => {
    return (
        <section className="cta-section-five">
            <div className="auto-container">
                <div className="inner-container" style={{ backgroundImage: "url(assets/images/background/pattern-20.png)" }}>
                    <div className="row clearfix">

                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <h3>Subscribe <br /> Our Newsletter</h3>
                            </div>
                        </div>
                        {/* Form Column */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="text">Sign up today for hints, tips and the latest product news</div>
                                {/* Newsletter Form */}
                                <div className="newsletter-form-three">
                                    <form method="post" action="http://themerange.net/html/Shakya Technology/contact.html">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Your Email Address" required />
                                            <button type="submit" className="theme-btn submit-btn">Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter