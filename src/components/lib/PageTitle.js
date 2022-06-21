import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
  return (
    
    <section className="page-title" style={{backgroundImage: 'url(assets/images/background/5.jpg)'}}>
    	<div className="auto-container">
			<h2>{ props.title }</h2>
			<ul className="page-breadcrumb">
				<li><Link to="/">home</Link></li>
				<li>{ props.title }</li>
			</ul>
        </div>
    </section>
    
  )
}

export default PageTitle