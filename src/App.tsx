import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Header from "./Header";
import Footer from "./Footer/Footer";
import SidebarComponent from "./Sidebar/Sidebar";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import NewEntryForm from "./NewEntryForm";
import PrivateRoute from "./components/PrivateRoute";
import { Container, MainContent, RightContainer } from "./styles/styled";
import Expense from "./Expense";

const App: React.FC = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Router>
      <Container>
        <Header />
        {isLoggedIn ? (
          <>
            <SidebarComponent
              expanded={sidebarExpanded}
              setExpanded={setSidebarExpanded}
            />
            <RightContainer expanded={sidebarExpanded}>
              <MainContent>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
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
                  <Route
                    path="/expense"
                    element={
                      <PrivateRoute>
                        <Expense />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </MainContent>
            </RightContainer>
          </>
        ) : (
          <MainContent>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </MainContent>
        )}
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
