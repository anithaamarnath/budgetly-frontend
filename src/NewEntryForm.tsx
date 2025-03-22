import React, { useState } from "react";

import { addTransaction } from "./services/budgetService";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  AddLabel,
  AddButton,
  AddForm,
  AddInput,
  AddSelect,
  AddTextArea,
  AddFormGroup,
  AddSuccessMessage,
  AddFormTitle,
  AddFormContainer,
} from "./styles/styled";

const NewEntryForm: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [category, setCategory] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const email = useSelector((state: RootState) => state.auth.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const transaction = {
      category,
      amount: Number(amount),
      description: notes,
      date,
    };

    try {
      await addTransaction(email, transaction);

      setDate("");
      setAmount("");
      setCategory("");
      setNotes("");

      setSuccessMessage("Transaction added successfully!");

      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("There was an error adding the transaction.");
    }
  };

  return (
    <AddFormContainer>
      <AddFormTitle>Log a New Entry</AddFormTitle>
      <AddForm onSubmit={handleSubmit}>
        <AddFormGroup>
          <AddLabel htmlFor="date">Date</AddLabel>
          <AddInput
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </AddFormGroup>

        <AddFormGroup>
          <AddLabel htmlFor="amount">Amount</AddLabel>
          <AddInput
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </AddFormGroup>

        <AddFormGroup>
          <AddLabel htmlFor="category">Category</AddLabel>
          <AddSelect
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
          </AddSelect>
        </AddFormGroup>

        <AddFormGroup>
          <AddLabel htmlFor="notes">Notes</AddLabel>
          <AddTextArea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </AddFormGroup>

        <AddButton type="submit">Add Entry</AddButton>
      </AddForm>

      {successMessage && (
        <AddSuccessMessage>{successMessage}</AddSuccessMessage>
      )}
    </AddFormContainer>
  );
};

export default NewEntryForm;
