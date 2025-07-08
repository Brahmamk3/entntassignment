import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './IncidentManagement.css';

export default function IncidentManagement() {
  const patients = useSelector((state) => state.patients);
  const incidents = useSelector((state) => state.incidents);
  const dispatch = useDispatch();

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

  const handleFileChange = (e, patientId) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedIncidents = incidents.map((incident) => {
        if (
          incident.patientId === patientId &&
          incident.appointmentDate === getLatestIncident(patientId)?.appointmentDate
        ) {
          return {
            ...incident,
            files: [...(incident.files || []), {
              name: file.name,
              url: reader.result,
            }],
          };
        }
        return incident;
      });

      dispatch({ type: "SET_INCIDENTS", payload: updatedIncidents });
      localStorage.setItem("appData", JSON.stringify({ patients, incidents: updatedIncidents }));
    };
    reader.readAsDataURL(file);
  };

  const getLatestIncident = (patientId) => {
    const patientIncidents = incidents.filter(i => i.patientId === patientId);
    return [...patientIncidents].sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate))[0];
  };

  const user = JSON.parse(localStorage.getItem("loggedUser"))
  if (!user || user.role !== 'Admin') {
    return <p className="access-denied">Access denied. Admin only.</p>;
  }

  return (
    <div className="incident-container">
      <h2 className="incident-title">🧾 Incident Management</h2>

      <div className="incident-table-wrapper">
        <table className="incident-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Title</th>
              <th>Description</th>
              <th>Comments</th>
              <th>Appointment Date</th>
              <th>Total Cost</th>
              <th>Treatment</th>
              <th>Status</th>
              <th>Next Visit</th>
              <th>Files</th>
              <th>Upload</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient) => {
              const patientIncidents = incidents.filter(i => i.patientId === patient.id);
              if (patientIncidents.length === 0) return null;

              const latest = getLatestIncident(patient.id);
              const totalCost = patientIncidents.reduce((sum, i) => sum + (i.cost || 0), 0);
              const nextVisitDate = latest.status?.toLowerCase() === "scheduled" ? latest.appointmentDate : "-";

              return (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{latest.title || "-"}</td>
                  <td>{latest.description || "-"}</td>
                  <td>{latest.comments || "-"}</td>
                  <td>{latest.appointmentDate}</td>
                  <td>₹{totalCost}</td>
                  <td>{latest.title || "-"}</td>
                  <td>{latest.status || "-"}</td>
                  <td>{nextVisitDate}</td>
                  <td>
                    {latest.files?.length > 0 ? latest.files.map((file, i) => (
                      <div key={i}>
                        <a href={file.url} target="_blank" rel="noreferrer">{file.name}</a>
                      </div>
                    )) : "-"}
                  </td>
                  <td>
                    <input type="file" onChange={(e) => handleFileChange(e, patient.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
