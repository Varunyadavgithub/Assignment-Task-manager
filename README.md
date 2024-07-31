# Personal Task Manager

A simple web application to manage daily tasks. This project demonstrates a full-stack application using React for the frontend, Node.js with Express for the backend, and MongoDB for the database.

## Features

- **Create**: Add new tasks.
- **Read**: View all tasks in a list.
- **Update**: Update task details.
- **Delete**: Delete tasks from the list.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API Testing**: Postman

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Varunyadavgithub/
   ```

2. Navigate to the `backend` directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the frontend server:

   ```bash
   npm start
   ```

   The frontend server will run on `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` to access the application.
- Use the "Add Task" button to create new tasks.
- View the list of tasks on the main page.
- Edit or delete tasks using the respective buttons on each task card.

## API Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by ID.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Testing

Use Postman to test the API endpoints. You can find the Postman collection in the `docs` folder (if provided).
