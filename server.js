const express = require("express");
const path = require("path");

const app = express();

console.log(path.resolve("index.html"));

// all requests with /staitc son los files
app.use("/static", express.static(path.resolve(__dirname, "static")));

// redirect all routes to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
