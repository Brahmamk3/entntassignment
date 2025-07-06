const LocalData = {
  users: [
    { id: "1", role: "Admin", email: "admin@entnt.in", password: "11" },
    { id: "2", role: "Patient", email: "john@entnt.in", password: "11", patientId: "p1" },
    { id: "3", role: "Patient", email: "alice@entnt.in", password: "11", patientId: "p2" },
    { id: "4", role: "Patient", email: "bob@entnt.in", password: "11", patientId: "p3" },
    { id: "5", role: "Patient", email: "emma@entnt.in", password: "11", patientId: "p4" },
    { id: "6", role: "Patient", email: "lucy@entnt.in", password: "11", patientId: "p6" },
    { id: "7", role: "Patient", email: "mike@entnt.in", password: "11", patientId: "p7" }
  ],
  patients: [
    { id: "p1", name: "John Doe", dob: "1990-05-10", contact: "1234567890", healthInfo: "No allergies" },
    { id: "p2", name: "Alice Smith", dob: "1985-08-15", contact: "9876543210", healthInfo: "Diabetic" },
    { id: "p3", name: "Bob Johnson", dob: "1979-03-22", contact: "5556667777", healthInfo: "Asthma" },
    { id: "p4", name: "Emma Brown", dob: "1995-11-05", contact: "4443332222", healthInfo: "No known conditions" },
    { id: "p5", name: "David Lee", dob: "2000-01-30", contact: "1122334455", healthInfo: "Peanut allergy" },
    { id: "p6", name: "Lucy Green", dob: "1988-12-12", contact: "1112223333", healthInfo: "Hypertension" },
    { id: "p7", name: "Mike White", dob: "1992-07-17", contact: "9998887777", healthInfo: "Healthy" }
  ],
  incidents: [
    // Existing + More for 2025-07-10
    { id: "i1", patientId: "p1", title: "Toothache", appointmentDate: "2025-07-01T10:00:00", cost: 80, status: "Completed", description: "", comments: "", files: [] },
    { id: "i2", patientId: "p2", title: "Root Canal", appointmentDate: "2025-07-10T15:00:00", cost: 200, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i3", patientId: "p3", title: "Braces Adjustment", appointmentDate: "2025-07-10T09:30:00", cost: 150, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i4", patientId: "p4", title: "Teeth Whitening", appointmentDate: "2025-07-10T13:00:00", cost: 250, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i5", patientId: "p5", title: "Cavity Filling", appointmentDate: "2025-07-20T11:45:00", cost: 90, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i6", patientId: "p6", title: "Gum Surgery", appointmentDate: "2025-07-10T10:30:00", cost: 300, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i7", patientId: "p7", title: "Wisdom Tooth Extraction", appointmentDate: "2025-07-10T16:00:00", cost: 350, status: "Scheduled", description: "", comments: "", files: [] },

    // Add 8 more on 2025-07-10
    { id: "i8", patientId: "p1", title: "Cleaning", appointmentDate: "2025-07-10T08:00:00", cost: 100, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i9", patientId: "p2", title: "Checkup", appointmentDate: "2025-07-10T08:30:00", cost: 120, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i10", patientId: "p3", title: "Follow-up", appointmentDate: "2025-07-10T11:00:00", cost: 110, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i11", patientId: "p4", title: "Scaling", appointmentDate: "2025-07-10T12:30:00", cost: 140, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i12", patientId: "p5", title: "Extraction", appointmentDate: "2025-07-10T14:30:00", cost: 160, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i13", patientId: "p6", title: "Filling", appointmentDate: "2025-07-10T10:15:00", cost: 130, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i14", patientId: "p7", title: "Consultation", appointmentDate: "2025-07-10T15:30:00", cost: 170, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i15", patientId: "p1", title: "X-ray Review", appointmentDate: "2025-07-10T17:00:00", cost: 190, status: "Scheduled", description: "", comments: "", files: [] },

    // Final 5 on other dates
    { id: "i16", patientId: "p2", title: "Night Guard", appointmentDate: "2025-07-11T09:00:00", cost: 120, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i17", patientId: "p3", title: "Bridge Fix", appointmentDate: "2025-07-12T11:30:00", cost: 210, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i18", patientId: "p4", title: "Crown Fit", appointmentDate: "2025-07-13T14:00:00", cost: 220, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i19", patientId: "p5", title: "Whitening Session", appointmentDate: "2025-07-14T13:00:00", cost: 180, status: "Scheduled", description: "", comments: "", files: [] },
    { id: "i20", patientId: "p6", title: "Deep Cleaning", appointmentDate: "2025-07-15T15:00:00", cost: 240, status: "Scheduled", description: "", comments: "", files: [] }
  ]
};

export default LocalData;




