import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/AddPatientDetails.css"; // Link to the CSS

export default function AddPatientDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPatient, setNewPatient] = useState({
    id: "",
    name: "",
    dob: "",
    contact: "",
    healthInfo: "",
  });

  const handleChange = (e) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PATIENT", payload: newPatient });
    navigate("/layout/patients");
  };

  return (
    <div className="add-patient-container">
      <h2 className="form-title">➕ Add New Patient</h2>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input name="id" type="text" required value={newPatient.id} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input name="name" type="text" required value={newPatient.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input name="dob" type="date" required value={newPatient.dob} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Contact:</label>
          <input name="contact" type="text" required value={newPatient.contact} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Health Info:</label>
          <input name="healthInfo" type="text" required value={newPatient.healthInfo} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Add Patient</button>
      </form>
    </div>
  );
}
