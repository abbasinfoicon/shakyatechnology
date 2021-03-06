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

const Team = () => {
    return (
        <section className="team-section-two">
            <div className="pattern-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-9.png)' }}></div>
            <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-9.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title light centered">
                    <div className="title style-two">Our Expert Person</div>
                    <h2>Meet Our intelligence <br /> Team Members</h2>
                </div>
                <OwlCarousel className="three-item-carousel owl-carousel owl-theme" {...options}>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-5.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Norman Benson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-6.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Mable Roberson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-7.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Lee Harvey</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-5.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Norman Benson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-6.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Mable Roberson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-7.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Lee Harvey</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-5.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Norman Benson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-6.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Mable Roberson</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Team Block Two */}
                    <div className="team-block-two">
                        <div className="inner-box">
                            <div className="image">
                                <a href="team-detail.html"><img src="assets/images/resource/team-7.jpg" alt="" /></a>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li><a target="_blank" href="http://facebook.com/" className="fab fa-facebook-f"></a></li>
                                    <li><a target="_blank" href="http://twitter.com/" className="fab fa-twitter"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-instagram"></a></li>
                                    <li><a target="_blank" href="http://google.com/" className="fab fa-google"></a></li>
                                    <li><a target="_blank" href="http://instagram.com/" className="fab fa-pinterest-p"></a></li>
                                </ul>
                            </div>
                            <div className="lower-content">
                                <h4><a href="team-detail.html">Lee Harvey</a></h4>
                                <div className="designation">Co-Founder</div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section>
    )
}

export default Team