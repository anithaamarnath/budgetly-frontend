import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LandingPageWrapper,
  HeroSection,
  FeaturesSection,
} from "./styles/styled";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle the button click event
    navigate("/signup"); // Navigate to the signup form
  };
  return (
    <LandingPageWrapper>
      <HeroSection>
        <h1>Welcome to Budget Tracker</h1>
        <p>
          Get a clear picture of your spending and saving. Set goals and track
          progress. We'll help you keep your finances in check.
        </p>
        <div className="buttons-container">
          <button onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </HeroSection>
      <FeaturesSection>
        <h2>Features</h2>
        <div>
          <p>Track your spending</p>
          <p>Set budget goals</p>
          <p>Analyze your investments</p>
        </div>
      </FeaturesSection>
    </LandingPageWrapper>
  );
};

export default LandingPage;
