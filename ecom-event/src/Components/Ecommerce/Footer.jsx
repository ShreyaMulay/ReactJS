import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };
  return (
    <div>
        <div className="card-footer text-body-secondary">
        <Link  id="navBackToTop" aria-label="Back to top" onClick={ scrollToTop}>
            <div className="navFooterBackToTop">
            <span className="navFooterBackToTopText">
                Back to top
            </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer
