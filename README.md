# Full Stack Developer Assessment

## Objective

Build a MERN-based **Transaction Management** application with CRUD capabilities for managing financial transactions, and optionally deploy it for public access.

## Tech Stack

- Frontend: React (or any JavaScript framework/library)
- Backend: Node.js with Express.js
- Database: SQL
- Deployment (Optional): Free cloud hosting (e.g., Render, Vercel, or Heroku)

## Completion Instructions

### Functionality

#### Must Have

1. **API Endpoints**:

   - **POST /api/transactions/**: Create a new transaction.
   - **GET /api/transactions/**: Retrieve all transactions for a user.
   - **PUT /api/transactions/{transaction_id}/**: Update the status of a transaction.
   - **GET /api/transactions/{transaction_id}/**: Retrieve details of a transaction.

2. **Transaction Model**:

   - `amount` (Decimal): Transaction amount.
   - `transaction_type` (String): DEPOSIT or WITHDRAWAL.
   - `user` (Reference): User ID.
   - `timestamp` (DateTime): Transaction timestamp.
   - `status` (String): PENDING, COMPLETED, FAILED.

3. **Frontend Features**:
   - Create transactions.
   - View transaction history (list view).
   - Update transaction status.
   - View transaction details.

#### Nice to Have

- Responsive UI design.
- Filtering/sorting transactions by type or status.
- Pagination or infinite scroll for transaction history.
- Authentication for user-based access.

### Guidelines to Develop the Project

#### Must Have

1. Validate all API inputs and handle errors gracefully.
2. Follow RESTful API conventions.
3. Use consistent and clean code practices.

#### Nice to Have

1. Use environment variables for sensitive data (e.g., `.env` for keys/config).
2. Implement API response caching where appropriate.

### Submission Instructions

#### Must Have

1. Share the GitHub repository link with:
   - Backend: `/server` folder
   - Frontend: `/client` folder
   - Deployment (if applicable): Hosted API URL.
2. Provide setup instructions in `README.md`.

#### Nice to Have

1. Include API documentation (e.g., using Swagger or Postman collection).
2. Add unit tests for backend logic.

## Resources

### Design Files

N/A (custom design allowed).

### APIs

Use the endpoints and examples provided in the assignment description.

### Third-party Packages

- **Backend**:

  - `express`: Web framework.
  - `mongoose`: MongoDB ORM.
  - `dotenv`: Environment variables.
  - `body-parser`: Request parsing.

- **Frontend**:
  - `axios`: API calls.
  - `react-router-dom`: Navigation (optional).
  - `formik` or `react-hook-form`: Form management (optional).

### Example Input and Output

Refer to the assignment description for API request/response examples.
