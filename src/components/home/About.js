import React from 'react'

const About = () => {
    return (
        <section className="about-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                            <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div>
                            <div className="image titlt" data-tilt data-tilt-max="5">
                                <img src="assets/images/resource/about.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">About us</div>
                                <h2>We are Best IT Solutions <br /> & Service providers</h2>
                                <div className="text">Enhance your organization’s infrastructure with our industry-leading business IT support services. Whether you have an immediate short-term technical project or are looking for a long-term trusted IT partner, Dataprise is here for you. For over twenty years, we’ve been helping organizations like yours leverage technology for their benefit.From business technology support to strategic consulting, we have the IT solutions .</div>
                            </div>
                            <a className="learn-more" href="about.html"><span className="icon flaticon-next-2"></span>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About