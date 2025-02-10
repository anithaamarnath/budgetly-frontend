import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import { Container } from "./styles/styled";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import NewEntryForm from "./NewEntryForm";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/addNew"
            element={
              <PrivateRoute>
                <NewEntryForm />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
