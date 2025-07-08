# ENTNT Dental Center Management Dashboard

A fully functional React-based Dental Center Management Dashboard built for the ENTNT Frontend Developer Assignment.

This application allows Admin (Dentist) users to manage patients and their appointments (incidents), and allows Patients to view their treatment history and upcoming appointments. All data is managed entirely on the frontend using **localStorage**.

---

## 🚀 Live Demo & Repository

* **Deployed Link**: https://gentle-granita-9e6b74.netlify.app/
* **GitHub Repo**: https://github.com/Brahmamk3/entntassignment/tree/master

---

## 📆 Project Setup

```bash
git clone https://github.com/your-username/entntassignment.git
cd entntassignment
npm install
npm start
```

App runs on: [http://localhost:3000](http://localhost:3000)

---

## 📏 Project Structure

```
entntassignment/
├── public/
│   └── index.html               # Main HTML template

├── src/
│   ├── Components/
│   │   |
|   |   common/
│   │   ├── authentication/      # Login logic & styling
│   │   │   ├── Login.js         # Login form component
│   │   │   └── Login.css        # Login page styles
│   │
│   │   ├── calendarview/        # Calendar of appointments
│   │   │   ├── CalendarView.js  # Calendar display + filter
│   │   │   └── CalendarView.css # Calendar styling
│   │
│   │   ├── dashboard/           # KPIs & summary
│   │   │   ├── Dashboard.js     # Dashboard landing component
│   │   │   └── Dashboard.css    # Dashboard styles
│   │
│   │   ├── home/                # Landing page
│   │   │   ├── Home.js          # App welcome/intro section
│   │   │   └── Home.css         # Home component styles
│   │
│   │   ├── incident/            # Appointment CRUD
│   │   │   ├── IncidentManagement.js   # Incident add/edit/list
│   │   │   └── IncidentManagement.css  # Incident styles
│   │
│   │   ├── layout/              # Header / Footer / Navigation
│   │   │   ├── Layout.js        # Shared layout structure
│   │   │   └── Layout.css       # Layout styling
│   │
│   │   ├── patient/             # Manage patients (Admin only)
│   │   │   ├── AddPatientDetails.js    # Add new patient form
│   │   │   ├── EditPatientDetails.js   # Edit patient info
│   │   │   ├── DeletePatientDetails.js # Delete patient record
│   │   │   ├── PatientManagement.js    # List + control patients
│   │   │
│   │   │   └── patientcss/      # CSS for patient components
│   │   │       ├── AddPatientDetails.css    # Add form styling
│   │   │       ├── EditPatientDetails.css   # Edit form styling
│   │   │       ├── DeletePatientDetails.css # Delete view styling
│   │   │       └── PatientManagement.css    # Table/list styling
│   │
│   │   ├── patientView/         # Patient-only view
│   │   │   ├── PatientView.js   # View patient history/appointments
│   │   │   └── PatientView.css  # Styling for patient view
│
│   ├── redux/                   # Redux store and reducer
│   │   ├── LocalData.js         # Initial local mock data
│   │   ├── Reducer.js           # Combined reducer logic
│   │   └── store.js             # Store config for Redux
│
│   ├── App.js                   # Routes and layout rendering
│   ├── App.css                  # Global app styles
│   ├── index.js                 # App entry point

├── .gitignore                   # Files to ignore in Git
├── README.md                    # Project documentation
├── package.json                 # Dependencies & scripts
├── package-lock.json / yarn.lock  # Exact package versions

```

---

## ✅ Features

### Authentication (Simulated)

* Hardcoded users with roles: Admin & Patient
* Email/password login
* Role-based access control
* Session persisted using localStorage

### Admin Features

* CRUD operations on patients
* Create/edit incidents (title, comments, cost, treatment, files)
* View calendar (monthly overview of incidents)
* View dashboard with KPIs (appointments, revenue, etc.)

### Patient Features

* View only their data
* Upcoming appointments
* Appointment history with cost, treatment, and files

### Common

* File uploads (converted to base64)
* Fully responsive
* All data stored and read from localStorage

---

## 📚 Component Descriptions

| Component                 | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `Login.js`                | Handles login for both Admin and Patient      |
| `Layout.js`               | Global layout: nav bar, header, footer        |
| `Dashboard.js`            | Displays KPIs (appointments, revenue, etc.)   |
| `CalendarView.js`         | Monthly view of incidents with clickable days |
| `PatientManagement.js`    | Admin can view all patients                   |
| `AddPatientDetails.js`    | Admin adds a new patient                      |
| `EditPatientDetails.js`   | Admin edits patient info                      |
| `DeletePatientDetails.js` | Admin deletes a patient                       |
| `IncidentManagement.js`   | Admin manages incidents per patient           |
| `PatientView.js`          | Patient sees upcoming and past treatments     |

---

## ⚙️ Technical Choices

* **React + Redux** for state management
* **React Router v6** for routing
* **Custom CSS** in component folders
* **localStorage** used to simulate backend
* **Base64/Blob** used for file upload preview & storage

---

## 🚫 Known Limitations

* File storage in localStorage can slow down on large files
* No backend or real auth service used
* No advanced filtering/searching in tables

---

## 📄 Sample Users

```json
{
  "users": [
    { "id": "1", "role": "Admin", "email": "admin@entnt.in", "password": "admin123" },
    { "id": "2", "role": "Patient", "email": "john@entnt.in", "password": "patient123", "patientId": "p1" }
  ]
}
```

---

## 🛎️ Submission Notes

* App deployed on Netlify 
* GitHub repository contains meaningful commit history
* Code follows component-based architecture and CSS separation
* Submitted to `hr@entnt.in` before the deadline

---

## 👩‍💼 Author

**Sakhamuri Veera Brahmanjaneyulu**
🔗 [LinkedIn](https://www.linkedin.com/in/s-v-brahmanjaneyulu-61a57a252/)
📧 [sakamuriveera@gmail.com](mailto:sakamuriveera@gmail.com)
