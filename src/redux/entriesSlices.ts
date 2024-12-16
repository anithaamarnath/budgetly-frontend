// src/redux/entriesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Entry {
  receipt: File | null;
  date: string;
  amount: number;
  category: string;
  notes: string;
}

interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addNewEntry: (state, action: PayloadAction<Entry>) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addNewEntry } = entriesSlice.actions;

export default entriesSlice.reducer;
