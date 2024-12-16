import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addNewEntry } from "../redux/entriesSlice"; // Assume you have a Redux slice for managing entries

const NewEntryForm: React.FC = () => {
  // const [receipt, setReceipt] = useState<File | null>(null); // Store scanned receipt file
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [category, setCategory] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // const dispatch = useDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // setReceipt(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    // Dispatching new entry to Redux (or can call an API to save it in the database)
    // dispatch(addNewEntry({ receipt, date, amount, category, notes }));

    // Reset the form after submission
    // setReceipt(null);
    setDate("");
    setAmount("");
    setCategory("");
    setNotes("");
  };

  return (
    <div>
      <h2>Log a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="receipt">Scan Receipt</label>
          <input type="file" id="receipt" onChange={handleFileChange} />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="housing">Housing</option>
            <option value="shopping">Shopping</option>
            {/* Add other categories here */}
          </select>
        </div>

        <div>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default NewEntryForm;
