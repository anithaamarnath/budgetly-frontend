import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
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
import { fetchUserBudgetData } from "./services/budgetService";
import { setBudgetData } from "./redux/budgetSlices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const ChartContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 1em;
`;

export const EditIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #007bff;
  margin-left: 10px;
`;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [totalBudget, setTotalBudget] = useState(5000);
  const [totalAmountSpent, setTotalAmountSpent] = useState(2500);
  const [remainingBudget, setRemainingBudget] = useState(2500);
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState<number | string>("");

  const email = useSelector((state: RootState) => state.auth?.email);

  const transactions = [
    { date: "2024-12-01", category: "Groceries", amount: 200 },
    { date: "2024-12-05", category: "Rent", amount: 1200 },
    { date: "2024-12-10", category: "Utilities", amount: 150 },
    { date: "2024-12-15", category: "Transportation", amount: 100 },
  ];

  const chartData = {
    labels: transactions.map((transaction) => transaction.date),
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

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedValue(totalBudget);
  };

  const handleSave = () => {
    const updatedBudget = Number(editedValue);
    setTotalBudget(updatedBudget);
    setRemainingBudget(updatedBudget - totalAmountSpent);
    setIsEditing(false);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBudgetData = async () => {
      try {
        console.log("Fetching budget data...", email);
        if (email) {
          const budgetData = await fetchUserBudgetData(email);
          console.log("Fetched budget data:", budgetData);
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
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
