const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.DATABASE_URL;
const connectDB = async () => {
    try {
        if(!dbURL){
            console.log("db URL not found");
        }else{
            mongoose.connect(dbURL);
            console.log("db connected" );
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB;