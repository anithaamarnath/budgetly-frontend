export default interface FormState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    error?: string | null;
    loading?: boolean;
  }

  export default interface LoginState {
    token: string;
    email: string;
    name: string;
    isLoggedIn: boolean;
  }
  

  export interface LogoutButtonProps {
    onLogout: () => void;
  }

  export interface AuthState {
    token: string | null;
    email: string | null;
    name: string | null;
    isLoggedIn: boolean;
    
  }

  // Define types for your slice state
  export interface Transaction {
  category: string;
  amount: number;
  description: string;
  date: string;
}

export interface BudgetState {
  totalBudget: number;
  totalAmountSpent: number;
  remainingBudget: number;
  transactions: Transaction[];
}