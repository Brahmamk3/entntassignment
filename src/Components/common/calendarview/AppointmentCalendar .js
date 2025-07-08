import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentCalendar.css';
import { useSelector } from 'react-redux';

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const user = JSON.parse(localStorage.getItem("loggedUser"))
  const incidents = useSelector(state => state.incidents);
  const patients = useSelector(state => state.patients);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSearchTerm('');
  };

  const formatDate = (date) => new Date(date).toLocaleDateString('en-CA');

  const filteredIncidents = selectedDate
    ? incidents.filter((incident) => {
      const incidentDate = formatDate(incident.appointmentDate);
      const selected = formatDate(selectedDate);
      return incidentDate === selected;
    })
    : [];

  const filteredBySearch = filteredIncidents.filter((incident) => {
    const patient = patients.find(p => p.id === incident.patientId);
    return patient?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalCost = filteredBySearch.reduce((acc, curr) => acc + curr.cost, 0);

  if (!user || user.role !== 'Admin') {
    return <p className="access-denied">Access denied. Admin only.</p>;
  }

  return (
    <div className="calendar-container" id="calendarContainer">
      <h2 className="calendar-title">Appointment Calendar</h2>
      <div className="calendar-widget">
        <Calendar className="react-calendar" onClickDay={handleDateClick} />
      </div>

      {selectedDate && incidents.length > 0 && (
        <div className="calendar-data">
          <h3 className="selected-date">Selected Date: {formatDate(selectedDate)}</h3>
          <input
            id="calendarSearch"
            className="calendar-search"
            type="text"
            placeholder="Search by patient name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="calendar-summary">
            <h4>Total Appointments: {filteredBySearch.length}</h4>
            <h4>Total Cost: ₹{totalCost}</h4>
          </div>

          {filteredBySearch.length > 0 ? (
            <div className="calendar-table-wrapper">
              <table className="calendar-table">
                <thead>
                  <tr>
                    <th>Incident ID</th>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Title</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Files</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBySearch.map((incident, index) => {
                    const patient = patients.find(p => p.id === incident.patientId);
                    return (
                      <tr key={index}>
                        <td>{incident.id}</td>
                        <td>{incident.patientId}</td>
                        <td>{patient ? patient.name : "Unknown"}</td>
                        <td>{incident.title}</td>
                        <td>₹{incident.cost}</td>
                        <td>{incident.status}</td>
                        <td>
                          {incident.files.length > 0 ? (
                            incident.files.map((file, idx) => (
                              <div key={idx}>
                                <a href={file.url} download={file.name}>
                                  {file.name}
                                </a>
                              </div>
                            ))
                          ) : (
                            "No Files"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-data">No appointments found for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AppointmentCalendar;
