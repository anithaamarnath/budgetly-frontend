import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Footer from "./Footer/Footer";
import LoginPage from "./LoginPage";
import { Container, MainContent } from "./styles/styled";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import NewEntryForm from "./NewEntryForm";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Header />
        <MainContent>
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
        </MainContent>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
