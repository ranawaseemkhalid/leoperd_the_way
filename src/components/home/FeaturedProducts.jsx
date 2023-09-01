import React from 'react'

const FeaturedProducts = () => {
  return (
    <section className="section project" aria-label="project">
      <div className="container">
        <p className="section-subtitle">Projects</p>

        <h2 className="h2 section-title">Featured Projects</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry the standard dummy text ever since the when an printer
          took.
        </p>

        <ul className="project-list">
          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-1.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing , Distrbution</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-2.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-3.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing , Distrbution</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-4.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-5.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Warehousing , Distrbution</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Warehouse inventory</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': 397, '--height': 352 }}>
                <img
                  src="./assets/images/project-6.jpg"
                  width="397"
                  height="352"
                  loading="lazy"
                  alt="Warehouse inventory"
                  className="img-cover" />
              </figure>

              <button className="action-btn" aria-label="View image">
                <ion-icon name="expand-outline"></ion-icon>
              </button>

              <div className="card-content">
                <p className="card-tag">Logistics, Analytics</p>

                <h3 className="h3">
                  <a href="#" className="card-title">Minimize Manufacturing</a>
                </h3>

                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FeaturedProducts