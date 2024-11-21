import React from "react";
import "../styles/TransactionList.css";

const TransactionList = ({ transactions, onTransactionClick }) => (
  <div className="transaction-list">
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Status</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr
            key={transaction.transaction_id}
            onClick={() => onTransactionClick(transaction)}
            className="transaction-row"
          >
            <td>{transaction.id}</td>
            <td>${transaction.amount.toFixed(2)}</td>
            <td>{transaction.transaction_type}</td>
            <td>{transaction.status}</td>
            <td>{new Date(transaction.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionList;
