import StudentsPicker from "../components/studentsPicker";
import StudentsTable from "../components/studentsTable";
import { fetchStudentData } from "../utils/fetchStudentData";
import { fetchLegalguardianData } from "../utils/fetchLegalguardianData";
import { fetchSchoolData } from "../utils/fetchSchoolData";

import { useState, useEffect } from "react";

const studentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);
  const [studentIds, setStudentIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const fetchedStudentsData = await fetchStudentData(studentIds);
      setStudentsData(fetchedStudentsData);

      const schoolIds = fetchedStudentsData.map(
        (studentData) => studentData.schoolId
      );
      const fetchedSchoolsData = await fetchSchoolData(schoolIds);
      setSchoolsData(fetchedSchoolsData);

      const legalguardianIds = fetchedStudentsData.map(
        (studentData) => studentData.legalguardianId
      );
      const fetchedLegalguardiansData = await fetchLegalguardianData(
        legalguardianIds
      );
      setLegalguardiansData(fetchedLegalguardiansData);

      setIsLoading(false);
    };

    if (studentIds.length > 0) {
      fetchData();
    }
  }, [studentIds]);

  const onStudentsPick = (selectedStudentIds) => {
    setStudentsData([]);
    setSchoolsData([]);
    setLegalguardiansData([]);
    setStudentIds(selectedStudentIds);
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StudentsTable
          studentsData={studentsData}
          schoolsData={schoolsData}
          legalguardiansData={legalguardiansData}
        />
      )}
    </>
  );
};

export default studentsDataComponent;
