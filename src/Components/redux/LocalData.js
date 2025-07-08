const LocalData = {
  "users": [
    { id: "1", role: "Admin", email: "admin@entnt.in", password: "11" },
    { id: "2", role: "Patient", email: "john@entnt.in", password: "11", patientId: "p1" },
    { id: "3", role: "Patient", email: "alice@entnt.in", password: "11", patientId: "p2" },
    { id: "4", role: "Patient", email: "bob@entnt.in", password: "11", patientId: "p3" },
    { id: "5", role: "Patient", email: "emma@entnt.in", password: "11", patientId: "p4" },
    { id: "6", role: "Patient", email: "lucy@entnt.in", password: "11", patientId: "p6" },
    { id: "7", role: "Patient", email: "mike@entnt.in", password: "11", patientId: "p7" }
  ],
  "patients": [
    { id: "p1", name: "John Doe", dob: "1990-05-10", contact: "1234567890", healthInfo: "No allergies" },
    { id: "p2", name: "Alice Smith", dob: "1985-08-15", contact: "9876543210", healthInfo: "Diabetic" },
    { id: "p3", name: "Bob Johnson", dob: "1979-03-22", contact: "5556667777", healthInfo: "Asthma" },
    { id: "p4", name: "Emma Brown", dob: "1995-11-05", contact: "4443332222", healthInfo: "No known conditions" },
    { id: "p5", name: "David Lee", dob: "2000-01-30", contact: "1122334455", healthInfo: "Peanut allergy" },
    { id: "p6", name: "Lucy Green", dob: "1988-12-12", contact: "1112223333", healthInfo: "Hypertension" },
    { id: "p7", name: "Mike White", dob: "1992-07-17", contact: "9998887777", healthInfo: "Healthy" }
  ],
  "incidents": [
    {
      "id": "i1",
      "patientId": "p3",
      "title": "Follow-up",
      "appointmentDate": "2025-07-08T14:00:00",
      "cost": 331,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i2",
      "patientId": "p4",
      "title": "Cleaning",
      "appointmentDate": "2025-07-16T14:00:00",
      "cost": 342,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i3",
      "patientId": "p4",
      "title": "Braces Adjustment",
      "appointmentDate": "2025-07-20T11:00:00",
      "cost": 133,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i4",
      "patientId": "p4",
      "title": "X-ray Review",
      "appointmentDate": "2025-07-13T12:00:00",
      "cost": 187,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i5",
      "patientId": "p3",
      "title": "Bridge Fix",
      "appointmentDate": "2025-07-18T15:00:00",
      "cost": 173,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i6",
      "patientId": "p2",
      "title": "Braces Adjustment",
      "appointmentDate": "2025-07-16T13:00:00",
      "cost": 234,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": [
        { name: "report1.pdf", url: "https://example.com/report1.pdf" },
        { name: "xray.png", url: "https://example.com/xray.png" }
      ]
    },
    {
      "id": "i7",
      "patientId": "p1",
      "title": "Follow-up",
      "appointmentDate": "2025-07-17T14:00:00",
      "cost": 136,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i8",
      "patientId": "p3",
      "title": "Teeth Whitening",
      "appointmentDate": "2025-07-14T16:00:00",
      "cost": 249,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i9",
      "patientId": "p7",
      "title": "Cleaning",
      "appointmentDate": "2025-07-06T13:00:00",
      "cost": 325,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i10",
      "patientId": "p5",
      "title": "Root Canal",
      "appointmentDate": "2025-07-10T13:00:00",
      "cost": 330,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i11",
      "patientId": "p4",
      "title": "Checkup",
      "appointmentDate": "2025-07-20T13:00:00",
      "cost": 274,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i12",
      "patientId": "p2",
      "title": "Consultation",
      "appointmentDate": "2025-07-02T09:00:00",
      "cost": 263,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i13",
      "patientId": "p6",
      "title": "Deep Cleaning",
      "appointmentDate": "2025-07-18T16:00:00",
      "cost": 306,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i14",
      "patientId": "p5",
      "title": "Bridge Fix",
      "appointmentDate": "2025-07-10T14:00:00",
      "cost": 177,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i15",
      "patientId": "p2",
      "title": "Filling",
      "appointmentDate": "2025-07-15T15:00:00",
      "cost": 144,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i16",
      "patientId": "p4",
      "title": "Toothache",
      "appointmentDate": "2025-07-16T10:00:00",
      "cost": 287,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i17",
      "patientId": "p1",
      "title": "Checkup",
      "appointmentDate": "2025-07-14T16:00:00",
      "cost": 126,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i18",
      "patientId": "p6",
      "title": "Deep Cleaning",
      "appointmentDate": "2025-07-05T11:00:00",
      "cost": 157,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i19",
      "patientId": "p3",
      "title": "Gum Surgery",
      "appointmentDate": "2025-07-10T11:00:00",
      "cost": 251,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i20",
      "patientId": "p2",
      "title": "X-ray Review",
      "appointmentDate": "2025-07-19T10:00:00",
      "cost": 255,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i21",
      "patientId": "p2",
      "title": "Filling",
      "appointmentDate": "2025-07-09T16:00:00",
      "cost": 284,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i22",
      "patientId": "p6",
      "title": "Toothache",
      "appointmentDate": "2025-07-18T16:00:00",
      "cost": 101,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i23",
      "patientId": "p6",
      "title": "X-ray Review",
      "appointmentDate": "2025-07-11T13:00:00",
      "cost": 152,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i24",
      "patientId": "p5",
      "title": "Night Guard",
      "appointmentDate": "2025-07-18T12:00:00",
      "cost": 138,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i25",
      "patientId": "p5",
      "title": "Root Canal",
      "appointmentDate": "2025-07-12T10:00:00",
      "cost": 227,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i26",
      "patientId": "p3",
      "title": "Whitening Session",
      "appointmentDate": "2025-07-20T09:00:00",
      "cost": 141,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i27",
      "patientId": "p7",
      "title": "Crown Fit",
      "appointmentDate": "2025-07-02T17:00:00",
      "cost": 322,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i28",
      "patientId": "p7",
      "title": "Follow-up",
      "appointmentDate": "2025-07-01T15:00:00",
      "cost": 194,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i29",
      "patientId": "p6",
      "title": "Cavity Filling",
      "appointmentDate": "2025-07-13T10:00:00",
      "cost": 114,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i30",
      "patientId": "p4",
      "title": "Gum Surgery",
      "appointmentDate": "2025-07-11T16:00:00",
      "cost": 172,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i31",
      "patientId": "p2",
      "title": "Toothache",
      "appointmentDate": "2025-07-18T14:00:00",
      "cost": 331,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i32",
      "patientId": "p7",
      "title": "Cavity Filling",
      "appointmentDate": "2025-07-03T14:00:00",
      "cost": 249,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i33",
      "patientId": "p6",
      "title": "Braces Adjustment",
      "appointmentDate": "2025-07-05T15:00:00",
      "cost": 339,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i34",
      "patientId": "p1",
      "title": "Scaling",
      "appointmentDate": "2025-07-06T16:00:00",
      "cost": 225,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i35",
      "patientId": "p1",
      "title": "Teeth Whitening",
      "appointmentDate": "2025-07-19T10:00:00",
      "cost": 181,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i36",
      "patientId": "p2",
      "title": "Whitening Session",
      "appointmentDate": "2025-07-02T12:00:00",
      "cost": 257,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i37",
      "patientId": "p2",
      "title": "Scaling",
      "appointmentDate": "2025-07-01T11:00:00",
      "cost": 178,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i38",
      "patientId": "p2",
      "title": "X-ray Review",
      "appointmentDate": "2025-07-09T12:00:00",
      "cost": 329,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i39",
      "patientId": "p3",
      "title": "Cleaning",
      "appointmentDate": "2025-07-16T16:00:00",
      "cost": 328,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i40",
      "patientId": "p3",
      "title": "Deep Cleaning",
      "appointmentDate": "2025-07-16T15:00:00",
      "cost": 165,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i41",
      "patientId": "p7",
      "title": "Wisdom Tooth Extraction",
      "appointmentDate": "2025-07-05T12:00:00",
      "cost": 132,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i42",
      "patientId": "p3",
      "title": "Extraction",
      "appointmentDate": "2025-07-02T15:00:00",
      "cost": 147,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i43",
      "patientId": "p2",
      "title": "Checkup",
      "appointmentDate": "2025-07-14T11:00:00",
      "cost": 279,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i44",
      "patientId": "p5",
      "title": "X-ray Review",
      "appointmentDate": "2025-07-16T13:00:00",
      "cost": 101,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i45",
      "patientId": "p7",
      "title": "Cleaning",
      "appointmentDate": "2025-07-02T12:00:00",
      "cost": 133,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i46",
      "patientId": "p6",
      "title": "Bridge Fix",
      "appointmentDate": "2025-07-03T09:00:00",
      "cost": 87,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i47",
      "patientId": "p6",
      "title": "Teeth Whitening",
      "appointmentDate": "2025-07-15T09:00:00",
      "cost": 158,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i48",
      "patientId": "p6",
      "title": "Scaling",
      "appointmentDate": "2025-07-13T14:00:00",
      "cost": 87,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i49",
      "patientId": "p5",
      "title": "Bridge Fix",
      "appointmentDate": "2025-07-21T12:00:00",
      "cost": 100,
      "status": "Completed",
      "description": "",
      "comments": "",
      "files": []
    },
    {
      "id": "i50",
      "patientId": "p7",
      "title": "Gum Surgery",
      "appointmentDate": "2025-07-05T11:00:00",
      "cost": 92,
      "status": "Pending",
      "description": "",
      "comments": "",
      "files": []
    }
  ]
};

export default LocalData;




