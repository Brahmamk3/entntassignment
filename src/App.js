import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
import Login from "./Components/Common/authentication/Login";

// Layout and Home
import Layout from "./Components/Common/layout/Layout";
import Home from "./Components/Common/home/Home";

// Patient Management
import PatientManagement from "./Components/Common/patient/PatientManagement";
import AddPatientDetails from "./Components/Common/patient/AddPatientDetails";
import EditPatientDetails from "./Components/Common/patient/EditPatientDetails";
import DeletePatientDetails from "./Components/Common/patient/DeletePatientDetails";
import PatientView from "./Components/Common/patientView/PatientView";

// // Incident Management
import IncidentManagement from "./Components/Common/incident/IncidentManagement";


// // Dashboard
import Dashboard from "./Components/Common/dashboard/Dashboard";

// // Calendar View
import AppointmentCalendar from "./Components/Common/calendarview/AppointmentCalendar ";

export default function App() {
  const [userLogin, setUserLogin] = useState(() => {
    return localStorage.getItem("userLogin") === "true";
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login setUserLogin={setUserLogin} />} />

        {/* Protected Routes */}
        {userLogin ? (
          <Route path="/layout" element={<Layout setUserLogin={setUserLogin} />}>
            <Route index element={<Home />} />
            <Route path="patient-view" element={<PatientView />} />


            <Route path="patients" element={<PatientManagement />} />
            <Route path="add-patient" element={<AddPatientDetails />} />
            <Route path="edit-patient/:id" element={<EditPatientDetails />} />
            <Route path="delete-patient/:id" element={<DeletePatientDetails />} />
            <Route path="patient-view" element={<PatientView />} />


            <Route path="incident-management" element={<IncidentManagement />} />


            <Route path="dashboard" element={<Dashboard />} />

            {/* Calendar View */}
            <Route path="calendar" element={<AppointmentCalendar />} />
          </Route>
        ) : (
          // Redirect if not logged in
          <Route path="/layout/*" element={<Login setUserLogin={setUserLogin} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
