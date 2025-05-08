const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY;
const isLogin = async (req, res, next) => {
  try {
    const token = req.cookies.foolivery;
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const tokenData = jwt.verify(token, secret_key);

    if (!tokenData) {
      res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isLogin };