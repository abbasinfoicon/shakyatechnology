import React from 'react'
import Navbar from './lib/Navbar'
import SocialBox from './lib/SocialBox'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header header-style-four">

      {/* Header Top Three */}
      <div className="header-top-three">
        <div className="auto-container">
          <div className="inner-container clearfix">

            {/* Top Left */}
            <div className="top-left pull-left">
              {/* Info List */}
              <ul className="info-list">
                <li><span className="icon flaticon-email-2"></span><a href="mailto:info@shakyatechnology.com"> info@shakyatechnology.com</a></li>
                <li><span className="icon flaticon-call-1"></span> <a href="tel:+918076708584">+918076708584</a></li>
              </ul>
            </div>

            {/* Top Right */}
            <div className="top-right pull-right">
              {/* Social Box */}
              <SocialBox />
              {/* Search */}

              <div className="search-box">
                <form method="post" action="/">
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search here..." required />
                    <button type="submit"><span className="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">

          <div className="pull-left logo-box">
            <div className="logo">
              <NavLink to="/"><img src="assets/images/logo.png" alt="" title="" /></NavLink>
            </div>
          </div>

          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                <Navbar />
              </div>
            </nav>

            {/* Main Menu End*/}
            <div className="outer-box clearfix">

              {/* get-a-quote */}
              <div className="get-a-quote">
                <a href="#" className="btn-quote">Get a quote</a>
              </div>

              {/* Nav Btn */}
              <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2"></span></div>

            </div>
          </div>

        </div>
      </div>
      {/*End Header Upper*/}

      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/*Logo*/}
          <div className="logo pull-left">
            <NavLink to="/"><img src="assets/images/logo.png" alt="" title="" /></NavLink>
          </div>
          {/*Right Col*/}
          <div className="pull-right">
            {/* Main Menu */}
            <nav className="main-menu">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </nav>{/* Main Menu End*/}

            {/* Main Menu End*/}
            <div className="outer-box clearfix">

              {/* Search Btn */}
              <div className="search-box-btn search-box-outer"><span className="icon flaticon-search"></span></div>

            </div>

          </div>
        </div>
      </div>{/* End Sticky Menu */}

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><span className="icon flaticon-multiply"></span></div>

        <nav className="menu-box">
          <div className="nav-logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title="" /></a></div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
        </nav>
      </div>{/* End Mobile Menu */}

    </header>
  )
}

export default Header