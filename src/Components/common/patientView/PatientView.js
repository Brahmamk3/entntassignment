import React from 'react';
import { useSelector } from 'react-redux';
import './PatientView.css'; // Link to CSS

const PatientView = () => {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const incidents = useSelector(state => state.incidents);
  const patients = useSelector(state => state.patients);

  if (!user || user.role !== 'Patient') {
    return <p className="access-denied">Access denied. Patients only.</p>;
  }

  const patientId = user.patientId;
  const patient = patients.find(p => p.id === patientId);
  const now = new Date();

  const upcoming = incidents
    .filter(inc => inc.patientId === patientId && new Date(inc.appointmentDate) >= now)
    .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));

  const history = incidents
    .filter(inc => inc.patientId === patientId && new Date(inc.appointmentDate) < now)
    .sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

  return (
    <div className="patient-view-container">
      <h2 className="welcome-msg">👋 Welcome, {patient?.name}</h2>

      {/* Upcoming */}
      <h3 className="section-title">📅 Upcoming Appointments</h3>
      {upcoming.length > 0 ? (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            {upcoming.map((inc, i) => (
              <tr key={i}>
                <td>{inc.title}</td>
                <td>{new Date(inc.appointmentDate).toLocaleString()}</td>
                <td>{inc.status}</td>
                <td>
                  {inc.files?.length > 0 ? (
                    inc.files.map((file, idx) => (
                      <div key={idx}>
                        <a href={file.url} download={file.name}>{file.name}</a>
                      </div>
                    ))
                  ) : (
                    'No Files'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-record">No upcoming appointments.</p>
      )}

      {/* History */}
      <h3 className="section-title">📜 Appointment History</h3>
      {history.length > 0 ? (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Treatment</th>
              <th>Status</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            {history.map((inc, i) => (
              <tr key={i}>
                <td>{inc.title}</td>
                <td>{new Date(inc.appointmentDate).toLocaleString()}</td>
                <td>₹{inc.cost}</td>
                <td>{inc.treatment || 'N/A'}</td>
                <td>{inc.status}</td>
                <td>
                  {inc.files?.length > 0 ? (
                    inc.files.map((file, idx) => (
                      <div key={idx}>
                        <a href={file.url} download={file.name}>{file.name}</a>
                      </div>
                    ))
                  ) : (
                    'No Files'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-record">No past appointments found.</p>
      )}
    </div>
  );
};

export default PatientView;
