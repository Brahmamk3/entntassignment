import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

export default function Dashboard() {
  const patients = useSelector(state => state.patients);
  const incidents = useSelector(state => state.incidents);

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  const next10Appointments = [...incidents]
    .filter(i => new Date(i.appointmentDate) >= now)
    .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))
    .slice(0, 10);

  const patientCostMap = {};
  incidents.forEach(i => {
    if (i.cost) {
      patientCostMap[i.patientId] = (patientCostMap[i.patientId] || 0) + i.cost;
    }
  });

  const topPatients = [...patients]
    .map(p => ({ ...p, totalSpent: patientCostMap[p.id] || 0 }))
    .sort((a, b) => b.totalSpent - a.totalSpent)
    .slice(0, 5);

  const pendingCount = incidents.filter(i => i.status?.toLowerCase() === 'pending').length;
  const completedCount = incidents.filter(i => i.status?.toLowerCase() === 'completed').length;

  const todayRevenue = incidents
    .filter(i => i.status?.toLowerCase() === 'completed' && i.appointmentDate.startsWith(todayStr))
    .reduce((sum, i) => sum + (i.cost || 0), 0);

  const todayCompleted = incidents.filter(i =>
    i.status?.toLowerCase() === 'completed' && i.appointmentDate.startsWith(todayStr)
  ).length;

  const user = JSON.parse(localStorage.getItem("loggedUser"))
  if (!user || user.role !== 'Admin') {
    return <p className="access-denied">Access denied. Admin only.</p>;
  }


  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📊 Dashboard</h2>

      <div className="dashboard-kpis">
        <div className="kpi-box">🕑 Next Appointments: <strong>{next10Appointments.length}</strong></div>
        <div className="kpi-box">🦷 Pending Treatments: <strong>{pendingCount}</strong></div>
        <div className="kpi-box">✅ Completed Treatments: <strong>{completedCount}</strong></div>
        <div className="kpi-box">💰 Today’s Revenue: <strong>₹{todayRevenue}</strong></div>
        <div className="kpi-box">📅 Today’s Completed Appointments: <strong>{todayCompleted}</strong></div>
      </div>

      <h3>📅 Next 10 Appointments</h3>
      {next10Appointments.length === 0 ? (
        <p>No upcoming appointments scheduled.</p>
      ) : (
        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {next10Appointments.map((i, idx) => {
                const patient = patients.find(p => p.id === i.patientId);
                return (
                  <tr key={idx}>
                    <td>{patient?.name || 'Unknown'}</td>
                    <td>{i.title}</td>
                    <td>{new Date(i.appointmentDate).toLocaleString('en-IN', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}</td>
                    <td>
                      <span className={`status-tag ${i.status?.toLowerCase()}`}>{i.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <h3 style={{ marginTop: '30px' }}>🏆 Top Patients (by Total Cost)</h3>
      {topPatients.length === 0 ? (
        <p>No top patients data available.</p>
      ) : (
        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Total Spent</th>
                <th>DOB</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {topPatients.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.name}</td>
                  <td>₹{p.totalSpent}</td>
                  <td>{p.dob}</td>
                  <td>{p.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
