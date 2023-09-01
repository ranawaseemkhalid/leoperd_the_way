import React, { useState } from 'react'

export const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [backTopActive, setBackTopActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(prevActive => !prevActive);
    setOverlayActive(prevActive => !prevActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
    setOverlayActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setHeaderActive(true);
      setBackTopActive(true);
    } else {
      setHeaderActive(false);
      setBackTopActive(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  const scrollTopTop = () => {

  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <header className={`header ${headerActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo">Leopard The Way</a>
        </h1>

        <nav className={`navbar ${navbarActive ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">Leopard The Way</a>

            <button
              className="nav-close-btn"
              aria-label="Close menu"
              data-nav-toggler
              onClick={toggleNavbar}
            >
              <span class="material-symbols-outlined">
                close
              </span>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                <span>Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                <span>About</span>
              </a>
            </li><li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                <span>Service</span>
              </a>
            </li><li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                <span>Blog</span>
              </a>
            </li><li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-contact">
          <div>
            <p className="contact-label">Free Call In U.S.A</p>
            <a href="tel:12345678910" className="contact-number">1 234 567 8910</a>
          </div>
          <div className="contact-icon">
            <span class="material-symbols-outlined">
              call
            </span>
          </div>
        </div>

        <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler onClick={toggleNavbar}>
          <span class="material-symbols-outlined">
            menu
          </span>
        </button>

        <div className={`overlay ${overlayActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>
      </div>
      {
        backTopActive &&
        <div onClick={scrollToTop} style={{ textAlign:"center", position: "fixed", bottom: "0", right: "0", margin: "0 2% 2% 0 ", backgroundColor: "white", border: "1px solid black", width:"40px", height:"40px" , cursor:"pointer"}} >
          <span class="material-symbols-outlined" style={{marginTop:"6px"}}>
            arrow_upward
          </span>
        </div>
      }
    </header>

  )
}
