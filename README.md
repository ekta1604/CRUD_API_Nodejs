# CRUD API with Node.js, Express, and MongoDB

This project is a basic backend development example using Node.js, Express, and MongoDB. It is essentially a MERN stack project without the React front-end. The application demonstrates how to create a CRUD (Create, Read, Update, Delete) API for managing products.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Postman (for API testing)

## Project Setup

1. Clone the Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install Dependencies
```npm install```
3. Set Up MongoDB
Ensure you have MongoDB installed and running. You can use a local instance or a cloud service like MongoDB Atlas.
4. Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:
MONGODB_URI=mongodb+srv://admin:admin@cluster0.vooczrq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0
PORT=3000
5. Start the Server
```npm start```
The server will start on http://localhost:3000.

API Endpoints
1. Get All Products
URL: /api/products
Method: GET
Description: Retrieve all products.
2. Get a Single Product by ID
URL: /api/products/:id
Method: GET
Description: Retrieve a single product by its ID.
3. Create a New Product
URL: /api/products
Method: POST
Description: Create a new product.
Body Parameters:
name: String (required)
quantity: Number (required)
price: Number (required)
image: String (optional)
4. Update a Product by ID
URL: /api/products/:id
Method: PUT
Description: Update an existing product by its ID.
Body Parameters: (same as Create)
5. Delete a Product by ID
URL: /api/products/:id
Method: DELETE
Description: Delete a product by its ID.

### Testing with Postman
#### You can use Postman to test the API endpoints. Here are some examples:

GET request to /api/products to retrieve all products.
POST request to /api/products with a JSON body to create a new product:
json
{
  "name": "Sample Product",
  "quantity": 10,
  "price": 100,
  "image": "http://example.com/image.png"
}
GET request to /api/products/:id to retrieve a single product by ID.
PUT request to /api/products/:id with a JSON body to update a product:
json
{
  "name": "Updated Product",
  "quantity": 15,
  "price": 150,
  "image": "http://example.com/updated-image.png"
}
DELETE request to /api/products/:id to delete a product by ID.

Project Structure
├── models
│   └── product.model.js   # Mongoose schema and model for products
├── index.js               # Main application file
└── README.md              # Project documentation

### Dependencies
express
mongoose
dotenv
