import React, { useEffect, useState } from "react";
import {
  DashboardContainer,
  Row,
  Card,
  Input,
  EditIcon,
  ChartContainer,
  Table,
  TableHeader,
  TableCell,
  SaveIcon,
  DeleteIcon,
} from "./styles/styled";
import { Line } from "react-chartjs-2";
import {
  faPencilAlt,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
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
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { totalBudget, totalAmountSpent, remainingBudget, transactions } =
    useSelector((state: RootState) => state.budget);
  const email = useSelector((state: RootState) => state.auth?.email);
  const budgetData = useSelector((state: RootState) => state.budget);

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState<number | string>("");
  const [editTransactionId, setEditTransactionId] = useState<string | null>(
    null
  );
  const [editCategory, setEditCategory] = useState<string>("");
  const [editAmount, setEditAmount] = useState<number | string>("");

  useEffect(() => {
    const fetchBudgetData = async () => {
      try {
        if (email) {
          const budgetData = await fetchUserBudgetData(email);

          dispatch(setBudgetData(budgetData));
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
        return;
      }

      const updatedData = await updateTotalBudget(email, updatedBudget);

      dispatch(setBudgetData(updatedData));

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating budget:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditTransaction = (transaction: any) => {
    setEditTransactionId(transaction._id);
    setEditCategory(transaction.category || "");
    setEditAmount(transaction.amount || "");
  };

  const handleSaveTransaction = async () => {
    if (!email || !editTransactionId) return;

    const updatedTransaction = {
      category: editCategory,
      amount: Number(editAmount),
    };

    try {
      const updatedData = await editTransaction(
        editTransactionId,
        updatedTransaction
      );

      dispatch(setBudgetData(updatedData));

      setEditTransactionId(null);
      setEditCategory("");
      setEditAmount("");
    } catch (error) {
      console.error("Error editing transaction:", error);
    }
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    try {
      const response = await deleteTransaction(transactionId);

      dispatch(
        setBudgetData({
          ...budgetData,
          transactions: budgetData.transactions.filter(
            (t) => t._id !== transactionId
          ),
          totalAmountSpent: response.totalAmountSpent,
          remainingBudget: response.remainingBudget,
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

      <ChartContainer>
        <h3>Spending Chart</h3>
        <Line data={chartData} />
      </ChartContainer>

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
                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <select
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="food">Food</option>
                      <option value="transportation">Transportation</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="housing">Housing</option>
                      <option value="shopping">Shopping</option>
                    </select>
                  ) : (
                    transaction.category || "No category"
                  )}
                </TableCell>

                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <Input
                      type="number"
                      value={editAmount}
                      onChange={(e) => setEditAmount(e.target.value)}
                    />
                  ) : (
                    `$${transaction.amount || "0"}`
                  )}
                </TableCell>
                <TableCell>
                  {editTransactionId === transaction._id ? (
                    <SaveIcon icon={faSave} onClick={handleSaveTransaction} />
                  ) : (
                    <>
                      <EditIcon
                        icon={faPencilAlt}
                        onClick={() => handleEditTransaction(transaction)}
                      />
                      <DeleteIcon
                        icon={faTrashAlt}
                        onClick={() => handleDeleteTransaction(transaction._id)}
                      />
                    </>
                  )}
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
