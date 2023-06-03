// fetchStudentData.js
export const fetchStudentData = async (studentId) => {
  try {
    // Simulate fetching student data from a remote server
    const response = await new Promise((resolve) =>
      setTimeout(() => {
        // Mock student data
        const mockData = {
          id: studentId,
          name: "John Doe",
          schoolId: "DEFAULT_SCHOOL_ID", // Replace with actual or default school ID
          legalguardianId: "DEFAULT_LEGAL_GUARDIAN_ID", // Replace with actual or default legal guardian ID
        };
        resolve(mockData);
      }, 1000)
    );
    return response;
  } catch (error) {
    console.error("Error fetching student data:", error);
    return null;
  }
};

