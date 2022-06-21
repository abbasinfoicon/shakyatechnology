import React from 'react'
import PageTitle from '../components/lib/PageTitle'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <PageTitle title="Not Found"/>


            {/*Error Section*/}
            <section className="error-section">
                <div className="auto-container">
                    <div className="content">
                        <h1>404</h1>
                        <h2>Oops! That page can’t be found</h2>
                        <div className="text">Sorry, but the page you are looking for does not existing</div>
                        <Link to="/" className="theme-btn btn-style-four">Go to Home Page<span className="arrow fa fa-angle-right"></span></Link>
                    </div>
                </div>
            </section>
            {/*End Error Section*/}
        </>
    )
}

export default NotFound