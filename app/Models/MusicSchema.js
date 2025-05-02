import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    artist: {
        type: String,
        trim: true,
    },
    album: {
        type: String,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    musicURL: {
        type: String,
        required: true,  
    },
    coverImage: {
        type: String,    
    },
    duration: {
        type: Number,   
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
    }
}, { timestamps: true });

const MusicModel = mongoose.models.Music || mongoose.model("Music", MusicSchema);
export default MusicModel;