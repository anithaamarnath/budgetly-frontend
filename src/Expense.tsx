import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background: #4a90e2;
  color: white;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const ActionButton = styled.button`
  margin: 0 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #ff6347;
  }
`;

const Input = styled.input`
  padding: 5px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const NoData = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #4a90e2;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3578e5;
  }
`;

const ForecastContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

const ForecastTitle = styled.h3`
  margin-bottom: 10px;
`;

const ForecastItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ddd;
`;

// TypeScript Interfaces
interface Transaction {
  _id: string;
  category: string;
  amount: number;
  description?: string;
  date: string;
}

const Expense: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(currentYear);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editTransactionId, setEditTransactionId] = useState<string | null>(
    null
  );
  const [editCategory, setEditCategory] = useState<string>("");
  const [editAmount, setEditAmount] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transactionsPerPage] = useState<number>(5);

  useEffect(() => {
    fetchFakeTransactions();
  }, [year, month]);

  // Fake Data Generator
  const fetchFakeTransactions = () => {
    const fakeData: Transaction[] = [
      {
        _id: "1",
        category: "Groceries",
        amount: 45.99,
        description: "Walmart shopping",
        date: `${year}-${month}-05`,
      },
      {
        _id: "2",
        category: "Transport",
        amount: 12.5,
        description: "Uber ride",
        date: `${year}-${month}-10`,
      },
      {
        _id: "3",
        category: "Dining",
        amount: 25.75,
        description: "Dinner at a restaurant",
        date: `${year}-${month}-15`,
      },
      {
        _id: "4",
        category: "Entertainment",
        amount: 15.99,
        description: "Netflix subscription",
        date: `${year}-${month}-20`,
      },
      {
        _id: "5",
        category: "Shopping",
        amount: 120.99,
        description: "Amazon purchase",
        date: `${year}-${month}-25`,
      },
      {
        _id: "6",
        category: "Groceries",
        amount: 56.89,
        description: "Costco shopping",
        date: `${year}-${month}-30`,
      },
    ];
    setTransactions(fakeData);
  };

  // Handle Edit
  const handleEditTransaction = (transaction: Transaction) => {
    setEditTransactionId(transaction._id);
    setEditCategory(transaction.category);
    setEditAmount(transaction.amount);
  };

  // Handle Save
  const handleSaveTransaction = () => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction._id === editTransactionId
          ? { ...transaction, category: editCategory, amount: editAmount }
          : transaction
      )
    );
    setEditTransactionId(null);
  };

  // Handle Delete
  const handleDeleteTransaction = (id: string) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction._id !== id)
    );
  };

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <h2>Transaction History</h2>
      <DropdownContainer>
        {/* Year Dropdown */}
        <Select value={year} onChange={(e) => setYear(Number(e.target.value))}>
          {[...Array(5)].map((_, index) => (
            <option key={index} value={currentYear - index}>
              {currentYear - index}
            </option>
          ))}
        </Select>

        {/* Month Dropdown */}
        <Select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <option key={m} value={m}>
              {new Date(0, m - 1).toLocaleString("en", { month: "long" })}
            </option>
          ))}
        </Select>
      </DropdownContainer>

      {/* Transactions Table */}
      {currentTransactions.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <TableHeader>Date</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <TableCell>
                  {moment(transaction.date).format("MM/DD/YYYY")}
                </TableCell>

                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <Select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                    >
                      <option value="Groceries">Groceries</option>
                      <option value="Transport">Transport</option>
                      <option value="Dining">Dining</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Shopping">Shopping</option>
                    </Select>
                  ) : (
                    transaction.category
                  )}
                </TableCell>

                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <Input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(Number(e.target.value))}
                    />
                  ) : (
                    `$${transaction.amount.toFixed(2)}`
                  )}
                </TableCell>

                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <>
                      <ActionButton onClick={handleSaveTransaction}>
                        <FontAwesomeIcon icon={faSave} />
                      </ActionButton>
                      <ActionButton onClick={() => setEditTransactionId(null)}>
                        <FontAwesomeIcon icon={faTimes} />
                      </ActionButton>
                    </>
                  ) : (
                    <>
                      <ActionButton
                        onClick={() => handleEditTransaction(transaction)}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleDeleteTransaction(transaction._id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </ActionButton>
                    </>
                  )}
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoData>No transactions found for the selected period.</NoData>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index}
              onClick={() => paginate(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </PageButton>
          ))}
        </Pagination>
      )}

      {/* Forecast */}
    </Container>
  );
};

export default Expense;
