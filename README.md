# ShopEase – E-commerce Backend API

## Project Overview
ShopEase is a simple e-commerce backend application developed using Node.js and Express.js. It provides RESTful APIs to manage products, including creating, viewing, updating, and deleting product information.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman
- Visual Studio Code

## Features
- Add new products.
- Retrieve all products.
- Retrieve individual products using ID.
- Update existing product details.
- Delete products.
- Validate product information.
- Handle invalid product IDs.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| POST | /products | Add a product |
| PUT | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

## Product Data Format

```json
{
  "name": "Gaming Mouse",
  "price": 1500,
  "category": "Accessories"
}
```

## Installation and Execution

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open Postman and test the API.

Server URL: `http://localhost:3002`

## Testing
All major CRUD operations and product validation were tested using Postman.

## Learning Outcomes
- Understanding REST API development.
- Working with Node.js and Express.js.
- Handling HTTP methods and status codes.
- Testing backend APIs using Postman.
- Implementing basic input validation.

## Author
Hemanth S.

## Project Type
Backend Development – Internship Project
