import React, { useState } from "react";

const StudentsPicker = ({ onPickHandler }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleStudentSelection = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handlePickStudents = () => {
    onPickHandler(selectedStudents);
    setSelectedStudents([]);
  };

  return (
    <div>
      <h2>Students Picker</h2>
      <div>
        <h3>Select Students:</h3>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                value="1"
                checked={selectedStudents.includes(1)}
                onChange={() => handleStudentSelection(1)}
              />
              Student 1
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="2"
                checked={selectedStudents.includes(2)}
                onChange={() => handleStudentSelection(2)}
              />
              Student 2
            </label>
          </li>
          {/* Add more students here */}
        </ul>
      </div>
      <button disabled={selectedStudents.length === 0} onClick={handlePickStudents}>
        Pick Selected Students
      </button>
    </div>
  );
};

export default StudentsPicker;
