import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;



export const addTransaction = async (email: string, transaction: { category: string; amount: number; date: string }) => {
  try {
    const response = await axios.post(`${apiUrl}/api/user/add-transaction/${email}`, transaction);  
    return response.data; 
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
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


export const editTransaction = async (transactionId: string, updatedData: object) => {
  try {
    const response = await axios.put(`${apiUrl}/api/user/edit-transaction/${transactionId}`, updatedData);
    return response.data; 
  } catch (error) {
    console.error('Error editing transaction:', error);
    throw error;
  }
};


export const deleteTransaction = async (transactionId: string) => {
  try {
    console.log("transactionId", transactionId);
    const response = await axios.delete(`${apiUrl}/api/user/delete-transaction/${transactionId}`);
    console.log("Response", response.data);
    return response.data; 
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

export const updateTotalBudget = async (email: string, totalBudget: number) => {
  try {
   
    const response = await axios.put(`${apiUrl}/api/user/update-budget/${email}`, {
      email, totalBudget, 
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