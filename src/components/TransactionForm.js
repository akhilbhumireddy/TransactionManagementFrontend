import React, { useState } from "react";
import "../styles/TransactionForm.css";

const TransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("DEPOSIT");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 1;
    onSubmit({
      amount: parseFloat(amount),
      transaction_type: type,
      user_id: userId,
    });
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-select"
        >
          <option value="DEPOSIT">Deposit</option>
          <option value="WITHDRAWAL">Withdrawal</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        Create Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
