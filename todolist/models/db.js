const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("db connected"))
.catch((err) => console.error("Error connecting to the database:", err));
