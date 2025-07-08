import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/PatientManagement.css'; // Make sure to create this CSS file

export default function PatientManagement() {
  const patients = useSelector(state => state["patients"]);
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("loggedUser"));

  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (!admin || admin.role !== 'Admin') {
    return <p className="access-denied">Access denied. Admin only.</p>;
  }

  return (
    <div className="patient-management-container">
      <h1 className="page-title">👥 Patients Management</h1>

      <div className="table-wrapper">
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Contact</th>
              <th>Health Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.dob}</td>
                <td>{patient.contact}</td>
                <td>{patient.healthInfo}</td>
                <td>
                  <button className="action-btn edit" onClick={() => navigate('/layout/edit-patient/' + patient.id)}>Edit</button>
                  <button className="action-btn delete" onClick={() => navigate('/layout/delete-patient/' + patient.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? 'active-page' : ''}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>

      {/* Add Patient */}
      <div className="add-patient-button-container">
        <button className="add-patient-button" onClick={() => navigate('/layout/add-patient')}>
          ➕ Add New Patient
        </button>
      </div>
    </div>
  );
}
