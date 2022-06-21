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
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1024: {
            items: 4
        }
    }
}

const Client = () => {
    return (
        <section className="clients-section style-three">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="image-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-18.png)' }}></div>
                    <div className="sponsors-outer">
                        {/*Sponsors Carousel*/}
                        <OwlCarousel className="sponsors-carousel owl-carousel owl-theme" {...options}>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/1.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/2.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/3.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/4.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/1.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/2.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/3.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/4.png" alt="" /></a></figure></li>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client