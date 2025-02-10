import React, { useState } from "react";
import styled from "styled-components";
import { addTransaction } from "./services/budgetService"; // Import the service function

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const NewEntryForm: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [category, setCategory] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // Assume `email` is obtained from the context, authentication, or props
  const email = "test@dev.com"; // Replace this with the dynamic email value

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const transaction = {
      category,
      amount: Number(amount),
      description: notes, // Use 'notes' as description
      date,
    };

    try {
      // Call the addTransaction service to send the data to the backend
      const addedTransaction = await addTransaction(email, transaction);
      console.log("Added transaction:", addedTransaction);

      // Reset the form after successful submission
      setDate("");
      setAmount("");
      setCategory("");
      setNotes("");

      // Optionally, show a success message or update the state
      alert("Transaction added successfully!");
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("There was an error adding the transaction.");
    }
  };

  return (
    <FormContainer>
      <FormTitle>Log a New Entry</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <Select
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
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="notes">Notes</Label>
          <TextArea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormGroup>

        <Button type="submit">Add Entry</Button>
      </Form>
    </FormContainer>
  );
};

export default NewEntryForm;
