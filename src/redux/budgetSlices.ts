import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BudgetState, Transaction } from '../types';



const initialState: BudgetState = {
  totalBudget: 5000,
  totalAmountSpent: 1200,
  remainingBudget: 3800,
  transactions: [],
};

// Redux slice
const budgetSlices = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudgetData: (state, action: PayloadAction<BudgetState>) => {
      state.totalBudget = action.payload.totalBudget;
      state.totalAmountSpent = action.payload.totalAmountSpent;
      state.remainingBudget = action.payload.remainingBudget;
      state.transactions = action.payload.transactions;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
      state.totalAmountSpent += action.payload.amount;
      state.remainingBudget = state.totalBudget - state.totalAmountSpent;
    },
    updateTotalBudget: (state, action: PayloadAction<number>) => {
      state.totalBudget = action.payload;
      state.remainingBudget = state.totalBudget - state.totalAmountSpent;
    },
  },
});

export const { setBudgetData, addTransaction, updateTotalBudget } = budgetSlices.actions;

export default budgetSlices.reducer;
