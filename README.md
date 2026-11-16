# ShopEase – E-commerce Backend API

## Project Overview

ShopEase is a simple e-commerce backend application developed using Node.js and Express.js. It provides RESTful APIs to manage product information through Create, Read, Update, and Delete (CRUD) operations.

This project demonstrates basic backend development, API creation, request handling, and input validation.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Visual Studio Code
- Git and GitHub

## Features

- Add new products.
- Retrieve all products.
- Retrieve individual products using ID.
- Update existing product details.
- Delete products.
- Validate product information.
- Handle invalid product IDs.
- Return appropriate HTTP status codes.

## Project Structure

```text
ShopEase-Ecommerce-API/
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| POST | /products | Add a product |
| PUT | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

## Product Data Format

Use the following JSON format when adding or updating a product:

```json
{
  "name": "Gaming Mouse",
  "price": 1500,
  "category": "Accessories"
}
```

## Installation and Execution

### 1. Clone the repository

```bash
git clone https://github.com/HxzmanExe/ShopEase-Ecommerce-API.git
```

### 2. Open the project folder

```bash
cd ShopEase-Ecommerce-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

The server runs at:

`http://localhost:3002`

## Data Storage

This project uses an in-memory JavaScript array to store product information. Product data is available while the server is running and resets when the server restarts.

## Testing

All major CRUD operations and product validation were tested using Postman, including successful product creation, retrieval, updating, and deletion.

## Learning Outcomes

- Understanding REST API development.
- Working with Node.js and Express.js.
- Handling HTTP methods and status codes.
- Testing backend APIs using Postman.
- Implementing basic input validation.
- Understanding CRUD operations and API architecture.

## Author

Hemanth S.

## Project Type

Backend Development – CodeOrbit Internship Project

## GitHub Repository

[ShopEase – E-commerce Backend API](https://github.com/HxzmanExe/ShopEase-Ecommerce-API)
