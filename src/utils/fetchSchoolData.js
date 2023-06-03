export const fetchSchoolData = async (schoolId) => {
  try {
    // Simulate fetching school data from a remote server
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ id: schoolId, name: "ABC School" }), 1000)
    );
    return response;
  } catch (error) {
    console.error("Error fetching school data:", error);
    return null;
  }
};


