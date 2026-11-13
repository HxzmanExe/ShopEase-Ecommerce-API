
const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

// Product storage
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Headphones",
        price: 1500,
        category: "Accessories"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to ShopEase E-commerce API!");
});

// GET all products
app.get("/products", (req, res) => {
    res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// POST - Add product
app.post("/products", (req, res) => {
    const { name, price, category } = req.body;

    if (!name || typeof name !== "string" ||
        typeof price !== "number" || price <= 0 ||
        !category || typeof category !== "string") {
        return res.status(400).json({
            message: "Valid name, positive price and category are required"
        });
    }

    const newProduct = {
        id: products.length
            ? Math.max(...products.map(p => p.id)) + 1
            : 1,
        name,
        price,
        category
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// PUT - Update product
app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, category } = req.body;

    if (
        (name !== undefined &&
            (typeof name !== "string" || !name.trim())) ||
        (price !== undefined &&
            (typeof price !== "number" || price <= 0)) ||
        (category !== undefined &&
            (typeof category !== "string" || !category.trim()))
    ) {
        return res.status(400).json({
            message: "Invalid product details"
        });
    }

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (category !== undefined) product.category = category;

    res.json({
        message: "Product updated successfully",
        product
    });
});

// DELETE - Remove product
app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.json({
        message: "Product deleted successfully"
    });
});

// Start server - always keep this at the bottom
app.listen(PORT, () => {
    console.log(`ShopEase server running at http://localhost:${PORT}`);
});
