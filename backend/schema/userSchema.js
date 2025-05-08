const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema(
    {
      fullName: {
        type : String,
        required : [true, "Fullname is required"],
      },
      email : {
        type : String,
        required : [true ,"Email is required"],
        unique : true,
        trim : true,
        lowercase : true,
      },
      phone : {
        type: Number,
        require: true,
        required: [true, "Phone is required"],
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        message: "Password must be at least 6 characters long.",
      },
    },
    {timestamps : true}

)

const User = mongoose.model("user",userSchema);

module.exports = User;