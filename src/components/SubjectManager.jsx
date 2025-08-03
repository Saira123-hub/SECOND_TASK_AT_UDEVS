



import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { calculateCGPA } from './utils/CGPACalculator';

const SubjectManager = ({ students, setStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const studentIndex = students.findIndex((s) => s.id === id);
  const [subjects, setSubjects] = useState(students[studentIndex]?.subjects || []);

  const [newSubject, setNewSubject] = useState({
    subjectName: '',
    subjectCode: '',
    creditHours: '',
    instructor: '',
    grade: '',
  });

  const handleChange = (e) => {
    setNewSubject({ ...newSubject, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      newSubject.subjectName &&
      newSubject.subjectCode &&
      newSubject.creditHours &&
      newSubject.instructor &&
      newSubject.grade
    ) {
      setSubjects([...subjects, newSubject]);
      setNewSubject({
        subjectName: '',
        subjectCode: '',
        creditHours: '',
        instructor: '',
        grade: '',
      });
    }
  };

  const handleDelete = (index) => {
    const updated = [...subjects];
    updated.splice(index, 1);
    setSubjects(updated);
  };

  const handleSave = () => {
    const updatedStudents = [...students];
    const studentIndex = updatedStudents.findIndex((s) => s.id.toString() === id);
    if (studentIndex === -1) {
      alert("Error: Student not found.");
      return;
    }

    updatedStudents[studentIndex].subjects = subjects;
    updatedStudents[studentIndex].cgpa = calculateCGPA(subjects);
    setStudents(updatedStudents);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h3>Manage Subjects for {students[studentIndex]?.name}</h3>
      <div className="row g-2">
        {['subjectName', 'subjectCode', 'creditHours', 'instructor', 'grade'].map((field, i) => (
          <div className="col-md-2" key={i}>
            {field === 'grade' ? (
              <select
                className="form-control"
                name="grade"
                value={newSubject.grade}
                onChange={handleChange}
              >
                <option value="">Select Grade</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            ) : (
              <input
                className="form-control"
                name={field}
                placeholder={field}
                value={newSubject[field]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={handleAdd}>Add Subject</button>
        </div>
      </div>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Credit</th>
            <th>Instructor</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((sub, i) => (
            <tr key={i}>
              <td>{sub.subjectName}</td>
              <td>{sub.subjectCode}</td>
              <td>{sub.creditHours}</td>
              <td>{sub.instructor}</td>
              <td>{sub.grade}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>Calculated CGPA: {calculateCGPA(subjects)}</h5>

      <button className="btn btn-success mt-3" onClick={handleSave}>Save</button>
    </div>
  );
};

export default SubjectManager;


