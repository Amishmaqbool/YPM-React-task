export const fetchLegalguardianData = async (legalguardianId) => {
  try {
    // Simulate fetching legal guardian data from a remote server
    const response = await new Promise((resolve) =>
      setTimeout(
        () => resolve({ id: legalguardianId, name: "Jane Smith" }),
        1000
      )
    );
    return response;
  } catch (error) {
    console.error("Error fetching legal guardian data:", error);
    return null;
  }
};


