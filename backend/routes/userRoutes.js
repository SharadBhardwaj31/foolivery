const express = require("express");
const {
    signup,
    login,
    profile,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers");
const {isLogin} = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.get("/profile",isLogin,profile);
userRouter.patch("/update",isLogin,updateUser);
userRouter.patch("/change-password", isLogin);
userRouter.delete("/delete",deleteUser);

module.exports = userRouter;