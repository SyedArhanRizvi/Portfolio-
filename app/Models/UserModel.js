import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    fullName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    userDP:{
        type:String,
    },
    userBIO:{
        type:String,
    },
}, {timestamps:true});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;