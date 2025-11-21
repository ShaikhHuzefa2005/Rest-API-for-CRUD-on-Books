const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Temporary in-memory data
let books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// GET all books
app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// POST a new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and Author are required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update a book by ID
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = title || book.title;
    book.author = author || book.author;

    res.status(200).json(book);
});

// DELETE book by ID
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(b => b.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(index, 1);

    res.status(200).json({ message: "Book deleted" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
