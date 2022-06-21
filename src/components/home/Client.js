import React from 'react'

const Client = () => {
    return (
        <section className="clients-section style-three">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="image-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-18.png)' }}></div>
                    <div className="sponsors-outer">
                        {/*Sponsors Carousel*/}
                        <ul className="sponsors-carousel owl-carousel owl-theme">
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/1.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/2.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/3.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/4.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/1.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/2.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/3.png" alt="" /></a></figure></li>
                            <li className="slide-item"><figure className="image-box"><a href="#"><img src="assets/images/clients/4.png" alt="" /></a></figure></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client