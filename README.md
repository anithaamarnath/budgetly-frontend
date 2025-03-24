# Budgetly

## Overview

Budgetly is a personal finance tracker that helps users monitor their expenses with a visual chart that compares the total budget, spent amount, and remaining balance. Users can add, edit, and delete transactions easily. Future features will include transaction filtering and pagination.

### Features
* 📊 Chart Representation: Compare the total budget, spent amount, and remaining balance.
* ➕ Add Transactions: Record income and expenses.
* ✏️ Edit Transactions: Update transaction details.
* ❌ Delete Transactions: Remove unwanted transactions.
* 🔍 Upcoming Features:
* Filter transactions.
  - Implement pagination for transaction history.

### Tech Stack
1.Frontend
  - React (with TypeScript)
  - Axios (for API requests)
  - Styled-Components (for styling)
  
2.Backend
  - Node.js (server-side runtime)
  - Express.js (backend framework)
  - MongoDB (database for storing transactions)

### Installation
  Prerequisites
  Install Node.js
  Install MongoDB

Backend Setup
  Create a .env file in the backend directory and add the following environment variables:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  JWT_SECRET=your_jwt_secret_key
  ```

Then run:
  ```
  cd backend
  npm install
  npm start
  ```

### Frontend Setup
  ```
  cd frontend
  npm install
  npm start
  ```

## Screenshots

### Landing Page

<img width="1440" alt="Screenshot 2025-03-24 at 12 27 29 PM" src="https://github.com/user-attachments/assets/351f089e-2c9e-41e5-9e58-62810dc5b528" />


### Signup 
<img width="1440" alt="Screenshot 2025-03-24 at 12 28 11 PM" src="https://github.com/user-attachments/assets/90c0e3ef-6c1c-413b-80c2-2fd7a3f02112" />

### Signin 
<img width="1440" alt="Screenshot 2025-03-24 at 12 28 05 PM" src="https://github.com/user-attachments/assets/078b3846-618c-4450-bf84-7cc0a1218652" />


### Add Transaction
<img width="1440" alt="Screenshot 2025-03-24 at 12 27 18 PM" src="https://github.com/user-attachments/assets/ae5b0c0e-34e7-407b-8f18-7640fb1b5ab5" />


### Dashboard View

<img width="1440" alt="Screenshot 2025-03-24 at 12 27 01 PM" src="https://github.com/user-attachments/assets/b487ed3b-57e7-416a-a654-2f7efe21f80c" />

<img width="1440" alt="Screenshot 2025-03-24 at 12 27 12 PM" src="https://github.com/user-attachments/assets/440265ec-428b-4499-ab10-5031955c5e0d" />










