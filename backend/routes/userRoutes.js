const express = require("express");
const {
    signup,
    login,
    profile,
    updateUser,
    deleteUser
} = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.get("/profile",profile);
userRouter.patch("/update",updateUser);
userRouter.delete("/delete",deleteUser);

module.exports = userRouter;