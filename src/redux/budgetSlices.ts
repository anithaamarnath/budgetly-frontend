import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  _id: string;
  category: string;
  amount: number;
  date: string;
}

interface BudgetState {
  totalBudget: number;
  totalAmountSpent: number;
  remainingBudget: number;
  transactions: Transaction[];
}

const initialState: BudgetState = {
  totalBudget: 0,
  totalAmountSpent: 0,
  remainingBudget: 0,
  transactions: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudgetData(state, action: PayloadAction<Partial<BudgetState>>) {
      return { ...state, ...action.payload };
    },
    
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
      state.totalAmountSpent += action.payload.amount;
      state.remainingBudget = state.totalBudget - state.totalAmountSpent;
    },
    editTransaction(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload; // Replace the entire transactions array with the updated one
      state.totalAmountSpent = state.transactions.reduce((sum, t) => sum + t.amount, 0);
      state.remainingBudget = state.totalBudget - state.totalAmountSpent;
    },
     
    

    deleteTransaction(state, action: PayloadAction<string>) {
      state.transactions = state.transactions.filter(
        (t) => t._id !== action.payload
      );
      state.totalAmountSpent = state.transactions.reduce(
        (sum, t) => sum + t.amount,
        0
      );
      state.remainingBudget = state.totalBudget - state.totalAmountSpent;
    },
    updateTotalBudget(state, action: PayloadAction<number>) {
      state.totalBudget = action.payload;
      state.remainingBudget = action.payload - state.totalAmountSpent;
    },
  },
});

export const {
  setBudgetData,
  addTransaction,
  editTransaction,
  deleteTransaction,
  updateTotalBudget,
} = budgetSlice.actions;

export default budgetSlice.reducer;
