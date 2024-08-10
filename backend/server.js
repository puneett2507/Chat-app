const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("API is running");
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
