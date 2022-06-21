import React from 'react'

const Sidebar = () => {
    return (
        <div className="xs-sidebar-group info-group">
            <div className="xs-overlay xs-bg-black"></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <a href="#" className="close-side-widget">
                            X
                        </a>
                    </div>
                    <div className="sidebar-textwidget">

                        {/* Sidebar Info Content */}
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                </div>
                                <div className="content-box">
                                    <h2>About Us</h2>
                                    <p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                                    <a href="#" className="theme-btn btn-style-two"><span className="txt">Consultation</span></a>
                                </div>
                                <div className="contact-info">
                                    <h2>Contact Info</h2>
                                    <ul className="list-style-two">
                                        <li><span className="icon fa fa-location-arrow"></span>22 B, Community Center , B1 Block Janakpuri, Delhi 110058, India</li>
                                        <li><span className="icon fa fa-phone"></span>+918076708584</li>
                                        <li><span className="icon fa fa-envelope"></span>info@shakyatechnology.com</li>
                                        <li><span className="icon fa fa-clock"></span>Open Mon - Fri 10:00-18:00 Saturday - Sunday: Closed</li>
                                    </ul>
                                </div>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li className="facebook"><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li className="linkedin"><a target="_blank" href="http://linkedin.com/" className="fab fa-linkedin"></a></li>
                                    <li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fab fa-pinterest-p"></a></li>
                                    <li className="skype"><a target="_blank" href="http://skype.com/" className="fab fa-skype"></a></li>
                                    <li className="twitter"><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li className="youtube"><a target="_blank" href="http://youtube.com/" className="fab fa-youtube"></a></li>
                                    <li className="instagram"><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar