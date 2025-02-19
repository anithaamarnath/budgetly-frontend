import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.secondary : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block; /* Show the hamburger icon on mobile/tablet */
  }
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
  }

  a {
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  a:hover {
    text-decoration: underline;
  }
`;

// LandingPage styles
export const LandingPageWrapper = styled.main`
  flex: 1;
  padding: 20px;
  max-width: 100%;
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px; /* Increased vertical padding */
  background-color: #27ae60;
  color: white;
  min-height: 60vh; /* Make hero section take up more height */

  h1 {
    font-size: 3rem; /* Larger text */
    font-family: "Merriweather", serif;
  }

  p {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px; /* Space between the buttons */
    margin-top: 30px;
  }

  button {
    padding: 12px 25px;
    background-color: #004d99;
    color: white;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 30px; /* Makes the button rounded */
  }

  button:hover {
    background-color: #0277bd;
  }
`;

export const FeaturesSection = styled.section`
  // padding: 50px 20px;
  background-color: #ffffff;
  text-align: center;
  min-height: 40vh; /* More height for this section */

  h2 {
    font-family: "Merriweather", serif;
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;

    p {
      font-size: 1.3rem;
      font-family: "Roboto", sans-serif;
      max-width: 300px;
    }
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: auto; /* Push the footer to the bottom of the screen */
  width: 100%;
`;

export const LoginSignUpWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh; /* Full viewport height */
  flex-direction: row; /* Default to row for desktop */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column; /* Stack vertically on tablet */
    height: auto; /* Allow height to be flexible on smaller screens */
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 425px) {
    flex-direction: column; /* Stack vertically on mobile */
    height: auto; /* Let the content decide height */
    padding: 20px 10px; /* Add some padding for mobile screens */
  }
`;

export const ImageColumn = styled.div`
  width: 50%; /* Default width for desktop */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/login-Section.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Replace the image with a solid color or pattern on smaller screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%; /* Take full width on smaller devices */
    height: 200px; /* Limit height of the background image on tablet */
    background-color: #f4f7fa; /* Replace with a background color or pattern */
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 180px; /* Reduce height for mobile screens */
    background-color: #f4f7fa; /* Background color for mobile */
  }
`;

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full-screen height */
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
  }

  input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
  }

  button {
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    margin-top: 15px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};

    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ColumnTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

export const WelcomeMessage = styled.h2`
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9; /* Light gray background */
  padding: 20px;
`;
export const StyledLogoutButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e33e3f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.5);
  }
`;

export const purple = "white";
export const darkPurple = "#4b0082";

export const DashboardWrapper = styled.div`
  background-color: #121212;
  color: white;
  padding: 2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px); /* Apply blur to create the glassy effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
`;

export const TableBody = styled.tbody`
  background-color: #444;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #555;
  }
`;

export const DashboardHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${purple};
`;

export const Subheader = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BudgetTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: ${purple};
  margin-bottom: 1rem;
`;

export const BudgetValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${purple};
`;

export const BudgetValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between the value and icon */
  font-size: 1.2rem;
`;

export const ChartWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

// Dashboard styles
export const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
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

export const SaveIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #28a745; /* You can change the color to green to signify saving */
  margin-left: 10px;
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #dc3545;
  margin-left: 10px;
`;

export const SuccessMessage = styled.p`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #c3e6cb;
  margin-bottom: 15px;
  font-weight: bold;
`;
