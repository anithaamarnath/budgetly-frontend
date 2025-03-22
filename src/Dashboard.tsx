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
import { Pie } from "react-chartjs-2";
import {
  faPencilAlt,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setBudgetData } from "./redux/budgetSlices";
import { RootState } from "./redux/store";
import {
  fetchUserBudgetData,
  editTransaction,
  deleteTransaction,
  updateTotalBudget,
} from "./services/budgetService";
import SidebarComponent from "./Sidebar/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering the necessary components for chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { totalBudget, totalAmountSpent, remainingBudget, transactions } =
    useSelector((state: RootState) => state.budget);
  const email = useSelector((state: RootState) => state.auth?.email);

  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState<number | string>("");
  const [editTransactionId, setEditTransactionId] = useState<string | null>(
    null
  );
  const [editCategory, setEditCategory] = useState<string>("");
  const [editAmount, setEditAmount] = useState<number | string>("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchBudgetData = async () => {
      if (email) {
        const budgetData = await fetchUserBudgetData(email);
        dispatch(setBudgetData(budgetData));
      } else {
        console.error("Email is null");
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

    if (!email) return;
    const updatedData = await updateTotalBudget(email, updatedBudget);
    dispatch(setBudgetData(updatedData));
    setIsEditing(false);
  };

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

    const updatedData = await editTransaction(
      editTransactionId,
      updatedTransaction
    );
    dispatch(setBudgetData(updatedData));

    setEditTransactionId(null);
    setEditCategory("");
    setEditAmount("");
  };

  const handleDeleteTransaction = async (transactionId: string) => {
    const updatedData = await deleteTransaction(transactionId);
    dispatch(setBudgetData(updatedData));
  };

  const spendingByCategory = transactions.reduce((acc, transaction) => {
    acc[transaction.category] =
      (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {} as Record<string, number>);

  const pieData = {
    labels: Object.keys(spendingByCategory),
    datasets: [
      {
        data: Object.values(spendingByCategory),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <DashboardContainer>
      <div style={{ display: "flex" }}>
        <SidebarComponent expanded={expanded} setExpanded={setExpanded} />

        <div style={{ flex: 1 }}>
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

          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 0.4, paddingRight: "20px" }}>
              <ChartContainer>
                <h3>Spending by Category</h3>
                <Pie data={pieData} />
              </ChartContainer>
            </div>
            <div style={{ flex: 0.6, paddingLeft: "20px" }}>
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
                              <option value="transportation">
                                Transportation
                              </option>
                              <option value="entertainment">
                                Entertainment
                              </option>
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
                            <SaveIcon
                              icon={faSave}
                              onClick={handleSaveTransaction}
                            />
                          ) : (
                            <>
                              <EditIcon
                                icon={faPencilAlt}
                                onClick={() =>
                                  handleEditTransaction(transaction)
                                }
                              />
                              <DeleteIcon
                                icon={faTrashAlt}
                                onClick={() =>
                                  handleDeleteTransaction(transaction._id)
                                }
                              />
                            </>
                          )}
                        </TableCell>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
