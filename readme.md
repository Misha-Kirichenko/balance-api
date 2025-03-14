# Simple Web App for Managing User Balance with Node.js (Express) and PostgreSQL (Sequelize ORM)

## Description

This project demonstrates a simple web application using Node.js (Express) and PostgreSQL (Sequelize ORM). The app initializes a database with a **users** table and includes a route to update the user's balance. The balance can be modified both positively and negatively, but the balance cannot become negative. This is achieved in real-time without the use of queues or delayed tasks.

The app is designed to handle a high volume of simultaneous requests, simulating a real-world scenario where users try to update their balance concurrently.

## Requirements

- Node.js
- PostgreSQL
- Sequelize ORM
- Umzug (for migrations and seeders)

## Features

- **Database Initialization**: Upon startup, the app will create a table called `users` in PostgreSQL using migrations.
- **User Account**: A user account is added to the database with an initial balance of `10000`.
- **Balance Update**: A route is provided to update the balance, either increasing or decreasing it. The balance cannot become negative.
- **Real-Time Operation**: All balance updates are done in real-time, without queues or delayed tasks.

## Steps

### 1. Database Setup and Migration

The application will automatically create a table called `users` in the PostgreSQL database upon startup. The table will contain a single user record with a field `balance` set to `10000`.

### 2. Balance Update Route

The app includes a route that updates the user's balance, either adding or subtracting the specified `amount`. The route accepts the following parameters:

- **userId**: The ID of the user.
- **amount**: The amount to modify the balance by (positive or negative).

**Important**: The user's balance cannot be negative. If a request attempts to subtract more than the available balance, an error message will be returned.

### 3. Handling High Traffic

The app is designed to handle 10,000 simultaneous requests trying to deduct `2` units from the balance at the same time. The system should successfully process **5000 requests**. The remaining **5000 requests** should return an error indicating insufficient funds.

### 4. Real-Time Execution

Balance updates are performed in real-time without the use of queues or delayed tasks, ensuring that the system operates under high load without bottlenecks.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd balance-api
```

### 2. Set environment

1. Rename the file `example.env` to `.env` in the root directory of the project.

2. Open the `.env` file and ensure that all the environment variables are set correctly

### 3. Run container

```bash
docker compose up --build
```

### 4. Run endpoints

1. GET `http://localhost:<PORT>/api/health` to check server's health

2. PATCH `http://localhost:<PORT>/api/balance` To update a user's balance, send a PATCH request with the following JSON body: `{"userId": 1, "amount": 10000}`
