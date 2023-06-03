import React from "react";

const StudentsTable = ({ studentsData, schoolsData, legalguardiansData }) => {
  return (
    <div>
      <h2>Students Table</h2>
      {studentsData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>School</th>
              <th>Legal Guardian</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{schoolsData[index]?.name}</td>
                <td>{legalguardiansData[index]?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default StudentsTable;
