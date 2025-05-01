const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json());

const PORT =process.env.PORT || 5000;

app.use(userRouter);  

app.listen(PORT,() => {
  console.log(`Server started on port : ${PORT}`);
  
});