import mongoose, {Schema, model} from "mongoose";

const StorySchema = new Schema({
    storyAdmin:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    media:{
        type:String,
        required:true
    },
    isExpire:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});

const StoryModel = mongoose.models.Story || model("Story", StorySchema);
export default StoryModel;