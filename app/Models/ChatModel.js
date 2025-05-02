import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    content:{
        type:String,
        trim:true
    },
    media:{
        type:String,
    },
}, {timestamps:true});

const ChatModel = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
export default ChatModel;