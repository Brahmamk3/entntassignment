import LocalData from "./LocalData";

const Reducer = (state = LocalData, action) => {
  switch (action.type) {
    // ---------------- Patient Actions ----------------
    case "ADD_PATIENT":
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };

    case "EDIT_PATIENT":
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        ),
      };

    case "DELETE_PATIENT":
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload
        ),
        incidents: state.incidents.filter(
          (incident) => incident.patientId !== action.payload
        ),
      };

    // ---------------- Incident Actions ----------------
    case "ADD_INCIDENT":
      return {
        ...state,
        incidents: [...state.incidents, action.payload],
      };

    case "EDIT_INCIDENT":
      return {
        ...state,
        incidents: state.incidents.map((incident) =>
          incident.id === action.payload.id ? action.payload : incident
        ),
      };

    case "DELETE_INCIDENT":
      return {
        ...state,
        incidents: state.incidents.filter(
          (incident) => incident.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
