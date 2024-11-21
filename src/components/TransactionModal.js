import React, { useState } from "react";
import "../styles/TransactionModal.css";

const TransactionModal = ({ transaction, onClose, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = useState(transaction.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStatus(transaction.transaction_id, newStatus);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Transaction Details</h2>
        <p>
          <strong>ID:</strong> {transaction.transaction_id}
        </p>
        <p>
          <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
        </p>
        <p>
          <strong>Type:</strong> {transaction.transaction_type}
        </p>
        <p>
          <strong>Status:</strong> {transaction.status}
        </p>
        <p>
          <strong>Timestamp:</strong>{" "}
          {new Date(transaction.timestamp).toLocaleString()}
        </p>

        <form onSubmit={handleSubmit} className="update-form">
          <label htmlFor="status">Update Status:</label>
          <select
            id="status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="status-select"
          >
            <option value="PENDING">Pending</option>
            <option value="COMPLETED">Completed</option>
            <option value="FAILED">Failed</option>
          </select>
          <div className="button-group">
            <button type="submit" className="update-button">
              Update Status
            </button>
            <button onClick={onClose} className="close-button">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
