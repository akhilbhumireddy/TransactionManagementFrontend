export interface Transaction {
  transaction_id: number;
  amount: number;
  transaction_type: "DEPOSIT" | "WITHDRAWAL";
  status: "PENDING" | "COMPLETED" | "FAILED";
  user_id: number;
  timestamp: string;
}

export interface CreateTransactionData {
  amount: number;
  transaction_type: "DEPOSIT" | "WITHDRAWAL";
  user_id: number;
}
