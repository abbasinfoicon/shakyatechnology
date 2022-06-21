import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className="navigation clearfix">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li className="dropdown has-mega-menu"><NavLink to="/services">Services</NavLink>
                <div className="mega-menu">
                    <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3>Web Developement</h3>
                            <ul>
                                <li><NavLink to="/service">Web Design & Development</NavLink></li>
                                <li><NavLink to="/service">PHP Website Development</NavLink></li>
                                <li><NavLink to="/service">WordPress Development</NavLink></li>
                                <li><NavLink to="/service">Codeigniter Development</NavLink></li>
                                <li><NavLink to="/service">Magento Development</NavLink></li>
                                <li><NavLink to="/service">Laravel Development</NavLink></li>
                                <li><NavLink to="/service">Website Maintenance</NavLink></li>
                                <li><NavLink to="/service">Shopify Development</NavLink></li>
                                <li><NavLink to="/service">Woocommerce Development</NavLink></li>
                                <li><NavLink to="/service">CakePHP Development</NavLink></li>
                                <li><NavLink to="/service">Node Js Development</NavLink></li>
                                <li><NavLink to="/service">ASP Net Development</NavLink></li>
                                <li><NavLink to="/service">Java Web Application</NavLink></li>
                                <li><NavLink to="/service">Python Development</NavLink></li>
                            </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3>Digital Marketing</h3>
                            <ul>
                                <li><NavLink to="/service">Web Design & Development</NavLink></li>
                                <li><NavLink to="/service">PHP Website Development</NavLink></li>
                                <li><NavLink to="/service">WordPress Development</NavLink></li>
                                <li><NavLink to="/service">Codeigniter Development</NavLink></li>
                                <li><NavLink to="/service">Magento Development</NavLink></li>
                                <li><NavLink to="/service">Laravel Development</NavLink></li>
                                <li><NavLink to="/service">Website Maintenance</NavLink></li>
                                <li><NavLink to="/service">Shopify Development</NavLink></li>
                                <li><NavLink to="/service">Woocommerce Development</NavLink></li>
                                <li><NavLink to="/service">CakePHP Development</NavLink></li>
                                <li><NavLink to="/service">Node Js Development</NavLink></li>
                                <li><NavLink to="/service">ASP Net Development</NavLink></li>
                                <li><NavLink to="/service">Java Web Application</NavLink></li>
                                <li><NavLink to="/service">Python Development</NavLink></li>
                            </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3>App Developement</h3>
                            <ul>
                                <li><NavLink to="/service">Web Design & Development</NavLink></li>
                                <li><NavLink to="/service">PHP Website Development</NavLink></li>
                                <li><NavLink to="/service">WordPress Development</NavLink></li>
                                <li><NavLink to="/service">Codeigniter Development</NavLink></li>
                                <li><NavLink to="/service">Magento Development</NavLink></li>
                                <li><NavLink to="/service">Laravel Development</NavLink></li>
                                <li><NavLink to="/service">Website Maintenance</NavLink></li>
                                <li><NavLink to="/service">Shopify Development</NavLink></li>
                                <li><NavLink to="/service">Woocommerce Development</NavLink></li>
                                <li><NavLink to="/service">CakePHP Development</NavLink></li>
                                <li><NavLink to="/service">Node Js Development</NavLink></li>
                                <li><NavLink to="/service">ASP Net Development</NavLink></li>
                                <li><NavLink to="/service">Java Web Application</NavLink></li>
                                <li><NavLink to="/service">Python Development</NavLink></li>
                            </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3>Graphic Designing</h3>
                            <ul>
                                <li><NavLink to="/service">Web Design & Development</NavLink></li>
                                <li><NavLink to="/service">PHP Website Development</NavLink></li>
                                <li><NavLink to="/service">WordPress Development</NavLink></li>
                                <li><NavLink to="/service">Codeigniter Development</NavLink></li>
                                <li><NavLink to="/service">Magento Development</NavLink></li>
                                <li><NavLink to="/service">Laravel Development</NavLink></li>
                                <li><NavLink to="/service">Website Maintenance</NavLink></li>
                                <li><NavLink to="/service">Shopify Development</NavLink></li>
                                <li><NavLink to="/service">Woocommerce Development</NavLink></li>
                                <li><NavLink to="/service">CakePHP Development</NavLink></li>
                                <li><NavLink to="/service">Node Js Development</NavLink></li>
                                <li><NavLink to="/service">ASP Net Development</NavLink></li>
                                <li><NavLink to="/service">Java Web Application</NavLink></li>
                                <li><NavLink to="/service">Python Development</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default Navbar