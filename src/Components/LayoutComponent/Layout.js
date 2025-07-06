import React from "react";
import './Layout.css';
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="header-left">
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQGr8aWAXWVrtA/feedshare-shrink_2048_1536/B56ZbKmx5JH0Ao-/0/1747155886576?e=2147483647&v=beta&t=HkiNojSte7WLdHG5mROcAjJa6A3tCEQlVHN7j1IAf1s"
            alt="ENTNT Logo"
            className="header-logo"
          />
        </div>
        <div className="header-center">
          <p className="header-quote">
            Welcome to ENTNT Dental Center — Care Beyond Smiles
          </p>
        </div>
        <div className="header-right">
          <Link to="/layouthome" className="nav-link">Home</Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/layouthome">Home</Link></li>
              <li><button className="footer-btn">Disclaimer</button></li>
              <li><button className="footer-btn">Feedback</button></li>
              <li><button className="footer-btn">Sitemap</button></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Info</h4>
            <p>📧 support@randommail.com</p>
            <p>📞 +91-9876543210</p>
            <p>
              🏢 ENTNT Dental Building<br />
              123 Smile Avenue<br />
              Hyderabad, India – 500001
            </p>
          </div>
          <div className="footer-column">
            <h4>Map & Visitors</h4>
            <p>🌍 Online Users: <strong>184040</strong></p>
            <p>👥 Total Visitors: <strong>10707166</strong></p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 View on Google Maps
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ENTNT Dental Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
