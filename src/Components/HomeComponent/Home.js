import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to ENTNT Dental Center Management System</h1>
        <p>
          Providing modern dental care solutions for patients and professionals. Manage
          appointments, treatments, records, and more—all in one place.
        </p>
      </section>

      <section className="services">
        <h2>Our Key Services</h2>
        <div className="service-cards">
          <div className="card">🦷 Dental Implants</div>
          <div className="card">✨ Teeth Whitening</div>
          <div className="card">🔍 Check-ups & Cleanings</div>
          <div className="card">🛠️ Root Canal Treatments</div>
          <div className="card">📅 Appointment Scheduling</div>
          <div className="card">📂 File Upload & History</div>
        </div>
      </section>

      <section className="cta">
        <h3>Start Managing Efficiently</h3>
        <p>
          Use the navigation links above to explore patient records, schedule or manage appointments,
          and upload treatment documents with ease.
        </p>
      </section>
    </div>
  );
}
