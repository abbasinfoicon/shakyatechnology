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

const News = () => {
    return (
        <section className="news-section-three">
            <div className="auto-container">
                <div className="sec-title-two centered">
                    <div className="title style-two">News and Updates Artical</div>
                    <h2>Latest From Our Blog Post <br /> Check Now</h2>
                </div>
                <OwlCarousel className="three-item-carousel owl-theme" {...options}>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-10.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Consulted admitting is power acuteness.</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-11.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Unsatiable entreaties may collecting</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-12.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Discovery incommode earnestly no he comments</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-10.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Consulted admitting is power acuteness.</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-11.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Unsatiable entreaties may collecting</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-12.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Discovery incommode earnestly no he comments</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-10.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Consulted admitting is power acuteness.</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-11.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Unsatiable entreaties may collecting</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                    {/* News Block Four */}
                    <div className="news-block-four">
                        <div className="inner-box">
                            <div className="image">
                                <div className="category">Technology</div>
                                <img src="assets/images/resource/news-12.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <a href="#" className="icon flaticon-unlink"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li><span className="icon fa fa-user"></span>June 20 2022</li>
                                    <li><span className="icon fa fa-comment"></span>admin</li>
                                </ul>
                                <h5><a href="#">Discovery incommode earnestly no he comments</a></h5>
                                <div className="text">dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. magna lacinia sit amet</div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section>
    )
}

export default News