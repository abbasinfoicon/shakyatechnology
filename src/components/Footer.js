import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer style-three" style={{backgroundImage: "url('assets/images/background/3.jpg)"}}>
      <div className="auto-container">
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="row clearfix">

            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                    </div>
                    <div className="text">We are the best world Information Technology Company. Providing the highest quality in hardware & Network solutions. 
                    About more than 25 years of experience and 1000 of innovative achievements.</div>
                    {/* Social Box */}
                    <ul className="social-box">
                      <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                      <li><a target="_blank" href="http://twitter.com/" className="fab fa-google"></a></li>
                      <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                      <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                    </ul>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4>IT Services</h4>
                    <ul className="list-link">
                      <li><a href="#">Graphic Designing</a></li>
                      <li><a href="#">Product Design</a></li>
                      <li><a href="#">Analytic Solutions</a></li>
                      <li><a href="#">Web Development</a></li>
                      <li><a href="#">Artificial Intelligence</a></li>
                      <li><a href="#">Software Development</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Column */}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget news-widget">
                    <h4>Latest News</h4>
                    {/* Footer Column */}
                    <div className="widget-content">
                      <div className="post">
                        <div className="thumb"><a href="#"><img src="assets/images/resource/post-thumb-3.jpg" alt="" /></a></div>
                        <span className="date">June 20, 2022</span>
                        <h5><a href="#">How Technology Made Businesses </a></h5>
                      </div>

                      <div className="post">
                        <div className="thumb"><a href="#"><img src="assets/images/resource/post-thumb-4.jpg" alt="" /></a></div>
                        <span className="date">June 20, 2022</span>
                        <h5><a href="#">Data Secure on Transitioning</a></h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget contact-info-widget">
                    <h4>IT Services</h4>
                    <ul className="footer-info-list">
                      <li><span className="icon flaticon-telephone-1"></span><a href="tel:+918076708584">+918076708584</a></li>
                      <li><span className="icon flaticon-email-2"></span><a href="mailto:info@shakyatechnology.com">info@shakyatechnology.com</a></li>
                      <li><span className="icon flaticon-send-1"></span> 22 B, Community Center , B1 Block Janakpuri, Delhi 110058, India</li>
                      <li><span className="icon flaticon-clock-1"></span> Open Mon - Fri 10:00-18:00</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="copyright">&copy; 2022 All Rights Reserved. Design & Developed By <a href="#">Designer</a></div>
            </div>


            {/* Column */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="footer-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">shop</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer