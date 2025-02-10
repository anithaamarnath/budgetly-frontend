import axios from "axios";


// Set up the base URL for your API
const apiUrl = import.meta.env.VITE_API_URL;


export const addTransaction = async (email: string, transaction: { category: string; amount: number; date: string }) => {
  try {
    const response = await axios.post(`${apiUrl}/api/user/add-transaction/${email}`, transaction);  // Updated route
    return response.data; // Return the added transaction
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error; // Propagate the error to be handled by the caller
  }
};



export const fetchUserBudgetData = async (email: string) => {

  try {
    const response = await fetch(`${apiUrl}/api/user/${email}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user transactions: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch user transactions: ${error.message}`);
    } else {
      throw new Error('Failed to fetch user transactions');
    }
  }
};

// Edit a transaction based on transaction ID
export const editTransaction = async (transactionId: string, updatedData: undefined) => {
  try {
   
    const response = await axios.put(`${apiUrl}/api/user/edit-transaction/${transactionId}`, updatedData);
   
    return response.data; // Expected structure of updated transaction
  } catch (error) {
    console.error('Error editing transaction:', error);
    throw error;
  }
};

// Delete a transaction based on transaction ID
export const deleteTransaction = async (transactionId: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/api/user/delete-transaction/${transactionId}`);
    return response.data; // Expected success message
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

export const updateTotalBudget = async (email: string, totalBudget: number) => {
  try {
   
    // Pass email as a URL parameter and the totalBudget in the request body
    const response = await axios.put(`${apiUrl}/api/user/update-budget/${email}`, {
      email, totalBudget, // Send totalBudget in the request body
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  
    return response.data;
  } catch (error) {
    console.error("Error updating budget:", error);
    throw error;
  }
};