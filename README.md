### 7920_MIT_Student_Marketplace
The MIT Student Marketplace supports students, especially internationals, by offering curated essentials, exclusive discounts, and personalized recommendations to ease onboarding and foster community.



## Backend


# User Management API

This project provides a **User Management API** for creating, authenticating, and managing user accounts. It includes endpoints for user registration, login, logout, and CRUD operations on user data.

## Features

- **User Authentication**: Secure login and logout with JWT-based authentication.
- **User Management**: Create, read, update, and delete user accounts.
- **Protected Routes**: Access control using authentication middleware.
- **Password Security**: Passwords are hashed using bcrypt.
- **Role-Based Data**: Users have roles like `student` and `admin`, along with customizable preferences.

---

## Table of Contents

1. [Installation](#installation)
2. [Environment Variables](#environment-variables)
3. [API Endpoints](#api-endpoints)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

---

## Environment Variables

Create a `.env` file in the project root and configure the following variables:

```
PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
```

---

## API Endpoints

### **Public Routes**
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/api/users`     | Register a new user       |
| POST   | `/api/users/login` | Login a user            |

### **Protected Routes**
| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | `/api/users`        | Get all users (Admin only)   |
| GET    | `/api/users/:email` | Get a user by email          |
| PUT    | `/api/users/:email` | Update user details by email |
| DELETE | `/api/users/:email` | Delete a user by email       |
| POST   | `/api/users/logout` | Logout the user              |

---

## Usage

### 1. Register a User
Send a `POST` request to `/api/users` with the following payload:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### 2. Login a User
Send a `POST` request to `/api/users/login`:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

The response will include a JWT token:
```json
{
  "message": "Login successful.",
  "token": "your.jwt.token"
}
```

### 3. Access Protected Routes
Include the token in the `Authorization` header as `Bearer your.jwt.token`.

---

## Technologies Used

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [JWT](https://jwt.io/)
- **Password Hashing**: [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

---

Here’s the documentation section for the `Product Management API` endpoints, which can be included in your README file:

---

### **Product Management API Endpoints**

These endpoints handle CRUD operations for managing product data in your application.

---

#### **Public Routes**

##### 1. Create a Product
- **Method**: `POST`
- **Endpoint**: `/api/products`
- **Description**: Add a new product to the database.
- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "price": 100.0,
    "description": "Product description",
    "category": "Category Name",
    "stock": 50
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Product created successfully.",
      "product": {
        "id": "product_id",
        "name": "Product Name",
        "price": 100.0,
        "description": "Product description",
        "category": "Category Name",
        "stock": 50
      }
    }
    ```
  - **400 Bad Request**: If required fields are missing.

---

##### 2. Get All Products
- **Method**: `GET`
- **Endpoint**: `/api/products`
- **Description**: Retrieve a list of all products.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": "product_id",
        "name": "Product Name",
        "price": 100.0,
        "description": "Product description",
        "category": "Category Name",
        "stock": 50
      },
      {
        "id": "product_id_2",
        "name": "Another Product",
        "price": 150.0,
        "description": "Another description",
        "category": "Another Category",
        "stock": 30
      }
    ]
    ```
  - **500 Internal Server Error**: If there’s an issue retrieving data.

---

##### 3. Get a Product by ID
- **Method**: `GET`
- **Endpoint**: `/api/products/:id`
- **Description**: Retrieve details of a product by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the product.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": "product_id",
      "name": "Product Name",
      "price": 100.0,
      "description": "Product description",
      "category": "Category Name",
      "stock": 50
    }
    ```
  - **404 Not Found**: If the product does not exist.

---

##### 4. Update a Product
- **Method**: `PUT`
- **Endpoint**: `/api/products/:id`
- **Description**: Update the details of a product by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the product.
- **Request Body** (partial updates allowed):
  ```json
  {
    "name": "Updated Product Name",
    "price": 120.0,
    "stock": 40
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Product updated successfully.",
      "product": {
        "id": "product_id",
        "name": "Updated Product Name",
        "price": 120.0,
        "description": "Product description",
        "category": "Category Name",
        "stock": 40
      }
    }
    ```
  - **404 Not Found**: If the product does not exist.

---

##### 5. Delete a Product
- **Method**: `DELETE`
- **Endpoint**: `/api/products/:id`
- **Description**: Delete a product by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the product.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Product deleted successfully."
    }
    ```
  - **404 Not Found**: If the product does not exist.

---


Here's the documentation for your **Order Management API** endpoints:

---

### **Order Management API Endpoints**

These endpoints manage CRUD operations for order data in your application.

---

#### **Public Routes**

##### 1. Create an Order
- **Method**: `POST`
- **Endpoint**: `/api/orders`
- **Description**: Create a new order.
- **Request Body**:
  ```json
  {
    "customerName": "John Doe",
    "orderItems": [
      {
        "productId": "product_id",
        "quantity": 2
      },
      {
        "productId": "product_id_2",
        "quantity": 1
      }
    ],
    "totalPrice": 200.0,
    "status": "Pending"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Order created successfully.",
      "order": {
        "id": "order_id",
        "customerName": "John Doe",
        "orderItems": [
          {
            "productId": "product_id",
            "quantity": 2
          },
          {
            "productId": "product_id_2",
            "quantity": 1
          }
        ],
        "totalPrice": 200.0,
        "status": "Pending"
      }
    }
    ```
  - **400 Bad Request**: If required fields are missing.

---

##### 2. Get All Orders
- **Method**: `GET`
- **Endpoint**: `/api/orders`
- **Description**: Retrieve a list of all orders.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": "order_id",
        "customerName": "John Doe",
        "orderItems": [
          {
            "productId": "product_id",
            "quantity": 2
          },
          {
            "productId": "product_id_2",
            "quantity": 1
          }
        ],
        "totalPrice": 200.0,
        "status": "Pending"
      },
      {
        "id": "order_id_2",
        "customerName": "Jane Smith",
        "orderItems": [
          {
            "productId": "product_id_3",
            "quantity": 3
          }
        ],
        "totalPrice": 150.0,
        "status": "Completed"
      }
    ]
    ```
  - **500 Internal Server Error**: If there’s an issue retrieving data.

---

##### 3. Get an Order by ID
- **Method**: `GET`
- **Endpoint**: `/api/orders/:id`
- **Description**: Retrieve details of a specific order by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the order.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": "order_id",
      "customerName": "John Doe",
      "orderItems": [
        {
          "productId": "product_id",
          "quantity": 2
        },
        {
          "productId": "product_id_2",
          "quantity": 1
        }
      ],
      "totalPrice": 200.0,
      "status": "Pending"
    }
    ```
  - **404 Not Found**: If the order does not exist.

---

##### 4. Update an Order
- **Method**: `PUT`
- **Endpoint**: `/api/orders/:id`
- **Description**: Update details of an order by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the order.
- **Request Body** (partial updates allowed):
  ```json
  {
    "status": "Shipped"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Order updated successfully.",
      "order": {
        "id": "order_id",
        "customerName": "John Doe",
        "orderItems": [
          {
            "productId": "product_id",
            "quantity": 2
          },
          {
            "productId": "product_id_2",
            "quantity": 1
          }
        ],
        "totalPrice": 200.0,
        "status": "Shipped"
      }
    }
    ```
  - **404 Not Found**: If the order does not exist.

---

##### 5. Delete an Order
- **Method**: `DELETE`
- **Endpoint**: `/api/orders/:id`
- **Description**: Delete an order by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the order.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Order deleted successfully."
    }
    ```
  - **404 Not Found**: If the order does not exist.

---


Here's the documentation for your **Review Management API** endpoints:

---

### **Review Management API Endpoints**

These endpoints manage CRUD operations for reviews in your application.

---

#### **Public Routes**

##### 1. Create a Review
- **Method**: `POST`
- **Endpoint**: `/api/reviews`
- **Description**: Create a new review for a product or service.
- **Request Body**:
  ```json
  {
    "productId": "product_id",
    "userId": "user_id",
    "rating": 4.5,
    "comment": "Excellent product, highly recommend!"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Review created successfully.",
      "review": {
        "id": "review_id",
        "productId": "product_id",
        "userId": "user_id",
        "rating": 4.5,
        "comment": "Excellent product, highly recommend!"
      }
    }
    ```
  - **400 Bad Request**: If required fields are missing.

---

##### 2. Get All Reviews
- **Method**: `GET`
- **Endpoint**: `/api/reviews`
- **Description**: Retrieve a list of all reviews.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": "review_id",
        "productId": "product_id",
        "userId": "user_id",
        "rating": 4.5,
        "comment": "Excellent product, highly recommend!"
      },
      {
        "id": "review_id_2",
        "productId": "product_id_2",
        "userId": "user_id_2",
        "rating": 3.8,
        "comment": "Good quality, but delivery was delayed."
      }
    ]
    ```
  - **500 Internal Server Error**: If there’s an issue retrieving data.

---

##### 3. Get a Review by ID
- **Method**: `GET`
- **Endpoint**: `/api/reviews/:id`
- **Description**: Retrieve details of a specific review by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the review.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": "review_id",
      "productId": "product_id",
      "userId": "user_id",
      "rating": 4.5,
      "comment": "Excellent product, highly recommend!"
    }
    ```
  - **404 Not Found**: If the review does not exist.

---

##### 4. Update a Review
- **Method**: `PUT`
- **Endpoint**: `/api/reviews/:id`
- **Description**: Update details of a review by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the review.
- **Request Body** (partial updates allowed):
  ```json
  {
    "rating": 5,
    "comment": "Absolutely fantastic!"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Review updated successfully.",
      "review": {
        "id": "review_id",
        "productId": "product_id",
        "userId": "user_id",
        "rating": 5,
        "comment": "Absolutely fantastic!"
      }
    }
    ```
  - **404 Not Found**: If the review does not exist.

---

##### 5. Delete a Review
- **Method**: `DELETE`
- **Endpoint**: `/api/reviews/:id`
- **Description**: Delete a review by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the review.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Review deleted successfully."
    }
    ```
  - **404 Not Found**: If the review does not exist.

---

Here's the documentation for your **Category Management API** endpoints:

---

### **Category Management API Endpoints**

These endpoints manage CRUD operations for categories in your application.

---

#### **Public Routes**

##### 1. Create a Category
- **Method**: `POST`
- **Endpoint**: `/api/categories`
- **Description**: Create a new category.
- **Request Body**:
  ```json
  {
    "name": "Electronics",
    "description": "All electronic devices and gadgets"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Category created successfully.",
      "category": {
        "id": "category_id",
        "name": "Electronics",
        "description": "All electronic devices and gadgets"
      }
    }
    ```
  - **400 Bad Request**: If required fields are missing.

---

##### 2. Get All Categories
- **Method**: `GET`
- **Endpoint**: `/api/categories`
- **Description**: Retrieve a list of all categories.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": "category_id",
        "name": "Electronics",
        "description": "All electronic devices and gadgets"
      },
      {
        "id": "category_id_2",
        "name": "Clothing",
        "description": "Apparel for men, women, and children"
      }
    ]
    ```
  - **500 Internal Server Error**: If there’s an issue retrieving data.

---

##### 3. Get a Category by ID
- **Method**: `GET`
- **Endpoint**: `/api/categories/:id`
- **Description**: Retrieve details of a specific category by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the category.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": "category_id",
      "name": "Electronics",
      "description": "All electronic devices and gadgets"
    }
    ```
  - **404 Not Found**: If the category does not exist.

---

##### 4. Update a Category
- **Method**: `PUT`
- **Endpoint**: `/api/categories/:id`
- **Description**: Update details of a category by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the category.
- **Request Body** (partial updates allowed):
  ```json
  {
    "name": "Electronics and Gadgets",
    "description": "Updated description for electronics"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Category updated successfully.",
      "category": {
        "id": "category_id",
        "name": "Electronics and Gadgets",
        "description": "Updated description for electronics"
      }
    }
    ```
  - **404 Not Found**: If the category does not exist.

---

##### 5. Delete a Category
- **Method**: `DELETE`
- **Endpoint**: `/api/categories/:id`
- **Description**: Delete a category by its ID.
- **Path Parameter**:
  - `id` (string): The unique ID of the category.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Category deleted successfully."
    }
    ```
  - **404 Not Found**: If the category does not exist.

---



