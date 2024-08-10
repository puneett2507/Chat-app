const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			process.env.MONGO_URI ||
				"mongodb+srv://puneetrawat2507:yV5P9SK8o6TYIUyZ@cluster0.x4s48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
			{}
		);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;
