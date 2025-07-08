import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/EditPatientDetails.css"; // 💡 Link to custom CSS

export default function EditPatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const patient = useSelector(state =>
    state.patients.find(p => p.id === id)
  );

  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    if (patient) {
      setEditPatient(patient);
    }
  }, [patient]);

  if (!editPatient) {
    return <p className="loading-text">Loading patient data...</p>;
  }

  const handleChange = (e) => {
    setEditPatient({
      ...editPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_PATIENT", payload: editPatient });
    navigate("/layout/patients");
  };

  return (
    <div className="edit-patient-container">
      <h2 className="form-title">✏️ Edit Patient Details</h2>
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input name="id" type="text" value={editPatient.id} readOnly />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input name="name" value={editPatient.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>DOB:</label>
          <input name="dob" type="date" value={editPatient.dob} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact:</label>
          <input name="contact" value={editPatient.contact} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Health Info:</label>
          <input name="healthInfo" value={editPatient.healthInfo} onChange={handleChange} required />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Update Patient</button>
        </div>
      </form>
    </div>
  );
}
