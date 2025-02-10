import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  fetchUserBudgetData,
  editTransaction,
  deleteTransaction,
  updateTotalBudget,
} from "./services/budgetService";
import { setBudgetData } from "./redux/budgetSlices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import moment from "moment"; // To format the date

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Styled components
const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Card = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const ChartContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1em;
`;

const EditIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #007bff;
  margin-left: 10px;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #dc3545;
  margin-left: 10px;
`;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { totalBudget, totalAmountSpent, remainingBudget, transactions } =
    useSelector((state: RootState) => state.budget);
  const email = useSelector((state: RootState) => state.auth?.email);

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState<number | string>("");

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBudgetData = async () => {
      try {
        if (email) {
          const budgetData = await fetchUserBudgetData(email);
          console.log("BUDGET", budgetData);
          dispatch(setBudgetData(budgetData)); // Dispatch the fetched data
        } else {
          console.error("Email is null");
        }
      } catch (error) {
        console.error("Error fetching budget data:", error);
      }
    };

    fetchBudgetData();
  }, [dispatch, email]);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedValue(totalBudget);
  };

  const handleSave = async () => {
    const updatedBudget = Number(editedValue);

    try {
      if (!email) {
        console.error("User email is not available");
        return;
      }

      // API call to update the total budget
      const updatedData = await updateTotalBudget(email, updatedBudget);

      // Update Redux state
      dispatch(setBudgetData(updatedData));

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating budget:", error);
    }
  };

  const handleEditTransaction = async (transactionId: string) => {
    console.log(`Editing transaction with ID: ${transactionId}`);
    try {
      const updatedTransaction = await editTransaction(transactionId);
      console.log("Transaction edited:", updatedTransaction);
      // Dispatch any state updates needed for the edited transaction
      dispatch(
        setBudgetData({
          ...budgetData,
          transactions: budgetData.transactions.map((transaction) =>
            transaction.id === transactionId ? updatedTransaction : transaction
          ),
        })
      );
    } catch (error) {
      console.error("Error editing transaction:", error);
    }
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    console.log(`Deleting transaction with ID: ${transactionId}`);
    try {
      await deleteTransaction(transactionId);
      // Optionally, re-fetch budget data or remove the deleted transaction from the state
      dispatch(
        setBudgetData({
          ...budgetData,
          transactions: transactions.filter((t) => t.id !== transactionId),
        })
      );
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const chartData = {
    labels: transactions.map((transaction) =>
      moment(transaction.date).format("MM/DD/YYYY")
    ),
    datasets: [
      {
        label: "Spending Over Time",
        data: transactions.map((transaction) => transaction.amount),
        borderColor: "#42a5f5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <DashboardContainer>
      <h1>Welcome to Your Dashboard!</h1>

      {/* First Row with Three Columns */}
      <Row>
        <Card>
          <h3>Total Budget</h3>
          {isEditing ? (
            <div>
              <Input
                type="number"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
                onBlur={handleSave}
                autoFocus
              />
            </div>
          ) : (
            <div>
              <p>${totalBudget}</p>
              <EditIcon icon={faPencilAlt} onClick={handleEditClick} />
            </div>
          )}
        </Card>
        <Card>
          <h3>Spent</h3>
          <p>${totalAmountSpent}</p>
        </Card>
        <Card>
          <h3>Remaining Budget</h3>
          <p>${remainingBudget}</p>
        </Card>
      </Row>

      {/* Middle Row with Chart */}
      <ChartContainer>
        <h3>Spending Chart</h3>
        <Line data={chartData} />
      </ChartContainer>

      {/* Third Row with Recent Transactions Table */}
      <div>
        <h3>Recent Transactions</h3>
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
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <TableCell>
                  {moment(transaction.date).format("MM/DD/YYYY")}
                </TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>
                  <EditIcon
                    icon={faPencilAlt}
                    onClick={() => handleEditTransaction(transaction.id)}
                  />
                  <DeleteIcon
                    icon={faTrashAlt}
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  />
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
