import React from "react";
import styled from "styled-components";
import moment from "moment";

// Styled Components
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

// TypeScript Interface
interface Transaction {
  _id: string;
  category: string;
  amount: number;
  date: string;
}

interface ForecastProps {
  transactions: Transaction[];
}

const Forecast: React.FC<ForecastProps> = ({ transactions }) => {
  const calculateForecast = () => {
    const categoryTotals = transactions.reduce((acc, transaction) => {
      const monthYear = moment(transaction.date).format("MM/YYYY");
      acc[monthYear] = acc[monthYear] || {};
      acc[monthYear][transaction.category] =
        (acc[monthYear][transaction.category] || 0) + transaction.amount;
      return acc;
    }, {} as Record<string, Record<string, number>>);

    // Calculate average for each category over the months
    const categoryAverages = Object.keys(categoryTotals).reduce(
      (acc, monthYear) => {
        const categories = categoryTotals[monthYear];
        Object.keys(categories).forEach((category) => {
          acc[category] = acc[category] || [];
          acc[category].push(categories[category]);
        });
        return acc;
      },
      {} as Record<string, number[]>
    );

    return Object.keys(categoryAverages).map((category) => {
      const amounts = categoryAverages[category];
      const avgAmount =
        amounts.reduce((sum, amount) => sum + amount, 0) / amounts.length;
      const lastMonthAmount =
        categoryTotals[moment().format("MM/YYYY")][category] || 0;
      const forecastDifference = (lastMonthAmount / avgAmount) * 100;

      return {
        category,
        forecastDifference,
        avgAmount,
        lastMonthAmount,
      };
    });
  };

  const forecastData = calculateForecast();

  return (
    <ForecastContainer>
      <ForecastTitle>Spending Forecast</ForecastTitle>
      {forecastData.length > 0 ? (
        forecastData.map((item, index) => (
          <ForecastItem key={index}>
            <span>{item.category}</span>
            <span>
              {item.forecastDifference.toFixed(2)}% from avg ($
              {item.avgAmount.toFixed(2)})
            </span>
          </ForecastItem>
        ))
      ) : (
        <p>No forecast data available.</p>
      )}
    </ForecastContainer>
  );
};

export default Forecast;
