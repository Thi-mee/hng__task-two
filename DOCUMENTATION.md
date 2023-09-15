# Express API for Managing People - Documentation

## Overview

The Express API for Managing People is designed to simplify the management of person records in a database. This documentation provides detailed information about the API's functionality, routes, and usage.

### Base URL

The base URL for all API endpoints is:

```http
http://localhost:5000/api
```

## Authentication

This API does not require authentication for basic operations. However, it is recommended to implement authentication and authorization mechanisms if used in a production environment.

## Routes

### 1. Create a Person

- **Endpoint:** `POST /api`
- **Request Body:**

  - Required Fields:
    - `name` (string): The name of the person.
    - `age` (number): The age of the person.
    - `email` (string): The email address of the person.

- **Description:** Create a new person record with the provided information.

- **Example Request:**

  ```json
  POST /api
  {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com"
  }
  ```

- **Example Response (Success):**

  ```json
  {
    "_id": "5f7e6c194de459001c5842ea",
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "createdAt": "2023-09-15T00:00:00.000Z",
    "updatedAt": "2023-09-15T00:00:00.000Z",
  }
  ```

- **Example Response (Error):**

  ```json
  {
    "msg": "Please provide name, age, and email"
  }
  ```

### 2. Get All People

- **Endpoint:** `GET /api`

- **Description:** Retrieve a list of all people.

- **Example Request:**

  ```json
  GET /api
  ```

- **Example Response (Success):**

  ```json
  [
    {
      "_id": "5f7e6c194de459001c5842ea",
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com",
      "createdAt": "2023-09-15T00:00:00.000Z",
      "updatedAt": "2023-09-15T00:00:00.000Z",
    },
    // More person records...
  ]
  ```

- **Example Response (Error):**

  ```json
  {
    "msg": "An error occurred while fetching the data"
  }
  ```

### 3. Get Person by ID

- **Endpoint:** `GET /api/:user_id`

- **Description:** Retrieve a person's information by their ID.

- **Example Request:**

  ```json
  GET /api/5f7e6c194de459001c5842ea
  ```

- **Example Response (Success):**

  ```json
  {
    "_id": "5f7e6c194de459001c5842ea",
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "createdAt": "2023-09-15T00:00:00.000Z",
    "updatedAt": "2023-09-15T00:00:00.000Z",
  }
  ```

- **Example Response (Error):**

  ```json
  {
    "msg": "Person not found"
  }
  ```

### 4. Update Person by ID

- **Endpoint:** `PUT /api/:user_id`

- **Request Body:**

  - Required Fields:
    - `name` (string): The updated name of the person.
    - `age` (number): The updated age of the person.
    - `email` (string): The updated email address of the person.

- **Description:** Update a person's information by their ID.

- **Example Request:**

  ```json
  PUT /api/5f7e6c194de459001c5842ea
  {
    "name": "Updated John Doe",
    "age": 35,
    "email": "updatedjohn@example.com"
  }
  ```

- **Example Response (Success):**

  ```json
  {
    "_id": "5f7e6c194de459001c5842ea",
    "name": "Updated John Doe",
    "age": 35,
    "email": "updatedjohn@example.com",
    "createdAt": "2023-09-15T00:00:00.000Z",
    "updatedAt": "2023-09-15T12:00:00.000Z",
  }
  ```

- **Example Response (Error):**

  ```json
  {
    "msg": "Person not found"
  }
  ```

### 5. Delete Person by ID

- **Endpoint:** `DELETE /api/:user_id`

- **Description:** Delete a person's record by their ID.

- **Example Request:**

  ```json
  DELETE /api/5f7e6c194de459001c5842ea
  ```

- **Example Response (Success):**

  ```json
  {
    "_id": "5f7e6c194de459001c5842ea",
    "name": "Updated John Doe",
    "age": 35,
    "email": "updatedjohn@example.com",
    "createdAt": "2023-09-15T00:00:00.000Z",
    "updatedAt": "2023-09-15T12:00:00.000Z",
  }
  ```

- **Example Response (Error):**

  ```json
  {
    "msg": "Person not found"
  }
  ```

## Error Handling

The API returns appropriate error messages and status codes for various scenarios, such as missing data or database errors.

## Conclusion

The Express API for Managing People offers a straightforward way to manage person records.
