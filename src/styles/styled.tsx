import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const purple = "white";
export const darkPurple = "#4b0082";

// Navbar styles

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background: #444;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: #444;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ProfileDropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

export const SidebarItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 10px;
`;

export const SidebarText = styled.span`
  flex-grow: 1;
`;

// Header styles

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 15px;
  z-index: 10;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
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

export const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px;
  }
`;

export const RightContainer = styled.div<{ expanded: boolean }>`
  flex-grow: 1;
  margin-left: ${(props) => (props.expanded ? "250px" : "80px")};
  transition: margin-left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 15px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 16px;
  cursor: pointer;
  width: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const LoginSignUpWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    padding: 20px 10px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    padding: 20px 10px;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f9;
  padding: 20px;
`;

export const Layout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

// Dashboard styles

export const DashboardWrapper = styled.div`
  background-color: #121212;
  color: white;
  padding: 2rem;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0.5rem;
    padding: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 1rem;
  }
`;

export const DashboardHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${purple};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

// Sidebar styles

export const Sidebar = styled.div<{ expanded: boolean }>`
  width: ${(props) => (props.expanded ? "250px" : "80px")};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out, margin-top 0.3s ease;
  overflow-y: auto;
  margin-top: ${(props) => (props.expanded ? "40px" : "50px")};
  z-index: 2;
  transition: background-color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${(props) => (props.expanded ? "200px" : "0")};
    padding-top: 10px;
    margin-top: 60px; /* Adjust for mobile header */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${(props) => (props.expanded ? "200px" : "0")};
    margin-top: 60px;
  }
`;

export const SidebarFooter = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
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
  padding: 100px 20px;
  background-color: #27ae60;
  color: white;
  min-height: 60vh;

  h1 {
    font-size: 3rem;
    font-family: "Merriweather", serif;
  }

  p {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
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
    border-radius: 30px;
  }

  button:hover {
    background-color: #0277bd;
  }
`;

export const FeaturesSection = styled.section`
  background-color: #ffffff;
  text-align: center;
  min-height: 40vh;

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

export const ImageColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/login-Section.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 200px;
    background-color: #f4f7fa;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 180px;
    background-color: #f4f7fa;
  }
`;

// Form styles
export const FormColumn = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;
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
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.secondary};
    }
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

export const TableBody = styled.tbody`
  background-color: #444;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #555;
  }
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
  gap: 10px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 10px 5px;
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px 0;
    padding: 10px;
  }
`;

export const ChartContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 15px 0;
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px 0;
    padding: 10px;
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6px;
    font-size: 0.9rem;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6px;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 1em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
    padding: 4px;
  }
`;

export const EditIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #007bff;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 5px;
  }
`;

export const SaveIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #28a745;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 5px;
  }
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #dc3545;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 5px;
  }
`;

export const SuccessMessage = styled.p`
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #c3e6cb;
  margin-bottom: 15px;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

// AddTransaction styles
export const AddFormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: Arial, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const AddFormTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2em;
  }
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5px;
  }
`;

export const AddFormGroup = styled.div`
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 12px;
  }
`;

export const AddLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
  }
`;

export const AddInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
    padding: 6px;
  }
`;

export const AddSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
    padding: 6px;
  }
`;

export const AddTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  resize: vertical;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
    padding: 6px;
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

export const AddSuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.successBackground};
  color: ${({ theme }) => theme.colors.successText};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.successBorder};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9em;
    padding: 8px;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 15px;
    font-size: 14px;
  }

  /* Tablet responsiveness */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 18px;
  }
`;
