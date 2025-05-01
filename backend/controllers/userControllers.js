// signup Controller
const signup = async(req,res) =>{
   try {
    const { fullName , email ,phone ,password } = req.body;

    return res.status(201).json({
        message : "signup success",
        success : true,
        data : {
            name: fullName,
            email: email,
            phone: phone,
            password: password,
        },
    });
   } catch (error) {
     console.log(error);
     
   }
};

// login controller
const login = (req,res) =>{
    res.send("login function");
};

// profile controller
const profile = (req,res) =>{
    res.send("profile function");
};

// update user controller
const updateUser = (req,res) =>{
    res.send("update function");
};

// delete user controller
const deleteUser = (req,res) =>{
    res.send("delete function");
};


module.exports = {signup,login,profile,updateUser,deleteUser};