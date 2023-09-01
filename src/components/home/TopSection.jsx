import React from 'react'

const TopSection = () => {
  return (
    <section
      className="section hero"
      aria-label="home"
      id="home"
      style={{ backgroundImage: 'url(./assets/images/hero-banner.jpg)' }}>
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">
            <span className="span">To Every</span> Direction
          </h2>

          <p className="hero-text">
            There are many variations of passages of worem Ipsum available,
            but the majority
          </p>

          <a href="#" className="btn-outline">View Services</a>

          <img
            src="./assets/images/logo.jpeg"
            width="116"
            height="116"
            loading="lazy"
            className="hero-shape shape-1" />

          <img
            src="./assets/images/logo.jpeg"
            width="116"
            height="116"
            loading="lazy"
            className="hero-shape shape-2" />
        </div>
      </div>
    </section>
  )
}

export default TopSection