# Project Name: Express API for Managing People

Welcome to the Express API for managing people! This API provides a simple and efficient way to create, read, update, and delete person records. Whether you're building a small application or a full-scale system, this API has you covered.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Routes](#routes)
5. [Contributing](#contributing)
6. [License](#license)

### Getting Started

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thi-mee/hng__task-two.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hng__task-two
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and provide the necessary configuration (e.g., `ATLAS_URI`, `PORT`).

   ```env
   PORT=5000
   ATLAS_URI=your-mongodb-atlas-uri
   ```

5. Start the server:

   ```bash
   npm start
   ```

### Usage

Once the server is running, you can use the following routes to interact with the API:

### Routes

- **Create a Person**

  - Route: `POST /api`
  - Request Body:

    ```json
    {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com"
    }
    ```

  - Description: Create a new person record.

- **Get All People**

  - Route: `GET /api`
  - Description: Retrieve a list of all people.

- **Get Person by ID**

  - Route: `GET /api/:user_id`
  - Description: Retrieve a person's information by their ID.

- **Update Person by ID**

  - Route: `PUT /api/:user_id`
  - Request Body:

    ```json
    {
      "name": "Updated Name",
      "age": 35,
      "email": "updated@example.com"
    }
    ```

  - Description: Update a person's information by their ID.

- **Delete Person by ID**

  - Route: `DELETE /api/:user_id`
  - Description: Delete a person's record by their ID.

### Contributing

Contributions are welcome! If you find a bug or have a feature request, please [open an issue](https://github.com/yourusername/express-api-for-people/issues). Feel free to submit pull requests to improve the project.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
