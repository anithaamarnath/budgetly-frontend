import axios from "axios";

// Define the API call to fetch user budget data
export const fetchUserBudgetData = async (email: string) => {
  console.log('Fetching budget data in services...', email);
    try {
      const response = await axios.put(`http://localhost:5000/api/user/${email}`);
      console.log('Fetched budget data:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching budget data:', error);
      throw error; 
    }
  };

  // export const registerUser = async (data: FormState): Promise<void> => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/signin/login", data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //     throw new Error("Login failed");
  //   }
  // };