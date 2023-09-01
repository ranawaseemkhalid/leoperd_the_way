import React from 'react'

const AllServices = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle">All Services</p>

        <h2 className="h2 section-title">Trusted For Our Services</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard dummy text ever since the when an printer
          took.
        </p>

        <ul className="service-list grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-1.png"
                  width="80"
                  height="60"
                  loading="lazy"
                  alt="Truck" />
              </div>

              <h3 className="h3 card-title">
                <span className="span">01</span> Road Freight
              </h3>

              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that
                we can give you the best service.
              </p>

              <a href="#" className="btn-link">
                <span class="material-symbols-outlined" style={{ margin: 0, padding: 0 }}>
                  arrow_forward
                </span>

                <span className="span">View Detail</span>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-5.png"
                  width="63"
                  height="60"
                  loading="lazy"
                  alt="Trolley" />
              </div>

              <h3 className="h3 card-title">
                <span className="span">02</span> Warehousing
              </h3>

              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that
                we can give you the best service.
              </p>

              <a href="#" className="btn-link">
                <span class="material-symbols-outlined" style={{ margin: 0, padding: 0 }}>
                  arrow_forward
                </span>

                <span className="span">View Detail</span>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-6.png"
                  width="46"
                  height="60"
                  loading="lazy"
                  alt="Paper" />
              </div>

              <h3 className="h3 card-title">
                <span className="span">03</span> Project Cargo
              </h3>

              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that
                we can give you the best service.
              </p>

              <a href="#" className="btn-link">
                <span class="material-symbols-outlined" style={{ margin: 0, padding: 0 }}>
                  arrow_forward
                </span>

                <span className="span">View Detail</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AllServices