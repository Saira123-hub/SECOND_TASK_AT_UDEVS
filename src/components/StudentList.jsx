import React, { useState } from "react";

import { Link } from 'react-router-dom';
function StudentList({ students, deleteStudent, updateStudent }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData(students[index]);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const saveEdit = () => {
    // update is happeining in parent 
    updateStudent(editIndex, editData);
    setEditIndex(null);
  };
 

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student List</h2>

      {students.length === 0 ? (
        <div className="alert alert-warning">No students registered.</div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table table-bordered mt-4">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Department</th>
              <th>Actions</th>
              
               </tr>     
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={stu.imageUrl}
                    alt="student"
                    width="70"
                    height="70"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                </td>

                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={editData.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    stu.name
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="roll"
                      className="form-control"
                      value={editData.roll}
                      onChange={handleEditChange}
                    />
                  ) : (
                    stu.roll
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      value={editData.department}
                      onChange={handleEditChange}
                    />
                  ) : (
                    stu.department
                  )}
                </td>

                <td>
                  {editIndex === index ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={saveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => startEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteStudent(stu.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to={`/manage-subjects/${students.id}`} className="btn btn-warning btn-sm">
  Manage Subjects
</Link>
    </div>
    
  );
}

export default StudentList;



