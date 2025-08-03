


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    department: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.roll || !student.department || !student.image) {
      alert("Please fill all fields.");
      return;
    }

    const newStudent = {
      ...student,
      id: Date.now(),
      imageUrl: URL.createObjectURL(student.image),
    };

    addStudent(newStudent);
    navigate("/students");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">University Registration Form</h2>
      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-person-fill"></i>
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
          />
        </div>

        {/* Roll Number */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-hash"></i>
          </span>
          <input
            type="text"
            className="form-control"
            name="roll"
            placeholder="Roll Number"
            value={student.roll}
            onChange={handleChange}
          />
        </div>

        {/* Department */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-building"></i>
          </span>
          <input
            type="text"
            className="form-control"
            name="department"
            placeholder="Department"
            value={student.department}
            onChange={handleChange}
          />
        </div>

        {/* Image Upload */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-image-fill"></i>
          </span>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
