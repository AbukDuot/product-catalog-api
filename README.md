# **Product Catalog API**

The Product Catalog API is a RESTful service for managing products, categories, and user authentication. Built with **Node.js**, **Express.js**, and **MongoDB**. it supports secure user authentication, product and category CRUD operations, and inventory tracking. The API ensures role-based access control, error handling, and scalability for e-commerce applications. 

---

## **Features**

- **Product Management**: Create, read, update, and delete products.
- **Category Management**: Organize products into categories.
- **User Authentication**: Register and login with JWT-based authentication.
- **Search and Filtering**: Search products by name, description, or category.
- **Inventory Tracking**: Track stock counts for products and variants.
- **Error Handling**: Proper error handling with meaningful status codes.

---

## **Technologies Used**

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing products, categories, and users.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: Password hashing.

---

## **Setup and Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-catalog-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd product-catalog-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGO_URI=mongodb+srv://your-db-connection-string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. Start the server:
   ```bash
   node server.js
   npm start
   ```

---

## **API Documentation**

### **Authentication**

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login and get a JWT token.

### **Products**

- **GET** `/api/products`: Get all products.
- **POST** `/api/products`: Create a new product (Admin only).

### **Categories**

- **GET** `/api/categories`: Get all categories.
- **POST** `/api/categories`: Create a new category (Admin only).

### **Inventories**

- **GET** `/api/inventories`: Get all inventories.
- **POST** `/api/inventories`: Create a new inventory entry (Admin only).
  
---

## **Example Requests and Responses**

### **Register a User**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123",
  "role": "admin"
}
```

### **Login**
```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

### **Create a Product**
```bash
POST /api/products
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 1200,
  "category": "64f8e4b5e4b0c1a2b3c4d5e6",
  "variants": [
    {
      "name": "16GB RAM",
      "sku": "LP16GB",
      "additionalCost": 200,
      "stockCount": 10
    }
  ],
  "stockCount": 50,
  "discount": 0
}

```
### **Create a category**
```bash
POST /api/categories
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
{
"name": "Electronics"
}
---

### **Create an Inventory **
```bash
POST /api/Inventories
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
{
"productId": "67e15e214feba4e458cbb051",
 "stockCount": 100
}
---

## **Assumptions and Limitations**

- **Admin Privileges**: Product and category creation require admin access.
- **Authentication Required**: All write operations need a valid JWT token.
- **MongoDB Connection**: Ensure MongoDB is running locally or on a cloud service.
- **Limited Search Functionality**: Basic search is implemented based on product name and description.

---

## **Testing the API**

Test the API using tools like:

- **Postman**
- **cURL**
- **VS Code's REST Client extension**

Verify that all endpoints work as expected and handle errors gracefully.

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## **Author**

**Abuk Mayen**

---

## **Acknowledgments**

- Inspired by real-world e-commerce platforms.
- Built using **Node.js** and **Express.js**.
