

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomeScreen from "./components/WelcomeScreen";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import SubjectManager from './components/SubjectManager';


function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  const updateStudent = (index, updatedStudent) => {
    const newStudents = [...students];
    newStudents[index] = updatedStudent;
    setStudents(newStudents);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/register"
          element={<RegistrationForm addStudent={addStudent} />}
        />
        <Route
          path="/students"
          element={
            <StudentList
              students={students}
              deleteStudent={deleteStudent}
              updateStudent={updateStudent}
            />
            
            
          }
          
        />
      
        <Route path="/manage-subjects/:id" element={<SubjectManager students={students} setStudents={setStudents} />} />

          



      </Routes>
    </Router>
  );
}

export default App;
