# Rest-API-for-CRUD-on-Books

📚 Book Management REST API

A simple REST API built using Node.js and Express to manage a list of books.
This project was created as part of the Web Development Internship – Task 3 (Book CRUD API).
The API uses in-memory storage, so no database is required.

🚀 Features

Get all books

Add a new book

Update an existing book

Delete a book

JSON-based API

Built using Express.js middleware and routing

🛠️ Technologies Used

Node.js

Express.js

Postman (for testing)

📂 Project Setup
1️⃣ Install dependencies
npm install

2️⃣ Run the server
node server.js


The server will start at:

http://localhost:3000

📘 API Endpoints
✔ GET all books

GET /books
Returns a list of all books.

✔ Add a new book

POST /books

Body (JSON):

{
  "title": "Book Title",
  "author": "Author Name"
}

✔ Update a book

PUT /books/:id

Body (JSON):

{
  "title": "Updated Title",
  "author": "Updated Author"
}

✔ Delete a book

DELETE /books/:id

📦 Example Book Object
{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear"
}

🧪 Testing

Use Postman to send requests to the API:

GET → view all books

POST → create new book

PUT → update book details

DELETE → remove a book

📄 Project Structure
📁 project-folder
│── server.js
│── package.json
│── README.md

📝 Notes

Data is stored in memory, so it resets every time the server restarts.

This project covers REST, Express routing, middleware, JSON parsing, and CRUD operations.
