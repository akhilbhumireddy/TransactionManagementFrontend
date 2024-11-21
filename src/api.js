const API_BASE_URL = "https://transactionmanagementbackend-2.onrender.com/api";

export const fetchTransactions = async (userId) => {
  const response = await fetch(
    `${API_BASE_URL}/transactions?user_id=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }
  return response.json();
};

export const createTransaction = async (data) => {
  const response = await fetch(`${API_BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create transaction");
  }
  return response.json();
};

export const updateTransactionStatus = async (transactionId, status) => {
  if (!transactionId) {
    throw new Error("Transaction ID is undefined");
  }
  const response = await fetch(
    `${API_BASE_URL}/transactions/${transactionId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update transaction status");
  }
  return response.json();
};
