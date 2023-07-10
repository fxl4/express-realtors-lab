// Import required modules.
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Create an instance of the express router.
const router = express.Router();

// Route handler. Define the route with the get method.

app.get("/", (req, res) => {
    res.send("Welcome! 🏡")
});

app.get("/apartments")

app.get("*", (req, res) => {
    res.send("Error 404 - Not Found")
});

app.listen(PORT, () => console.log(`Serving up home information on port ${PORT} 🏡`));

// Export the router
module.exports = router;

// NPM RUN DEV after re-starting
