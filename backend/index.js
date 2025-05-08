const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./utils/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const PORT =process.env.PORT || 5000;

app.use(userRouter);  

app.listen(PORT,() => {
  connectDB();
  console.log(`Server started on port : ${PORT}`);
  
});