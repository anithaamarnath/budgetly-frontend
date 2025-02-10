import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BudgetState {
  totalBudget: number;
  totalAmountSpent: number;
  remainingBudget: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions: any[];
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
    setBudgetData(state, action: PayloadAction<BudgetState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBudgetData } = budgetSlice.actions;
export default budgetSlice.reducer;
