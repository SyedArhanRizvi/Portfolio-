import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    ],
    messages: [
        {
            sender: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            content: {
                type: String,
                trim: true,
            },
            media: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ]
}, { timestamps: true });

const MessagesModel = mongoose.models.Message || mongoose.model("Message", MessageSchema);
export default MessagesModel;
