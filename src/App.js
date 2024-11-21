import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionModal from "./components/TransactionModal";
import {
  fetchTransactions,
  createTransaction,
  updateTransactionStatus,
} from "./api";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      const userId = 1; // Replace with actual user ID from authentication
      const data = await fetchTransactions(userId);
      setTransactions(data.transactions);
    } catch (err) {
      setError("Failed to load transactions");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTransaction = async (transactionData) => {
    try {
      const newTransaction = await createTransaction(transactionData);
      setTransactions([newTransaction, ...transactions]);
    } catch (err) {
      setError("Failed to create transaction");
      console.error(err);
    }
  };

  const handleUpdateStatus = async (transactionId, newStatus) => {
    try {
      const updatedTransaction = await updateTransactionStatus(
        transactionId,
        newStatus
      );
      setTransactions(
        transactions.map((t) =>
          t.transaction_id === transactionId ? updatedTransaction : t
        )
      );
      setSelectedTransaction(null);
    } catch (err) {
      setError("Failed to update transaction status");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <TransactionForm onSubmit={handleCreateTransaction} />
        {loading ? (
          <p>Loading transactions...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <TransactionList
            transactions={transactions}
            onTransactionClick={setSelectedTransaction}
          />
        )}
        {selectedTransaction && (
          <TransactionModal
            transaction={selectedTransaction}
            onClose={() => setSelectedTransaction(null)}
            onUpdateStatus={handleUpdateStatus}
          />
        )}
      </main>
    </div>
  );
};

export default App;
