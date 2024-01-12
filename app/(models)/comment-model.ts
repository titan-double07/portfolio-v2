import mongoose, { Schema } from "mongoose";
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const commentSchema = new Schema(
  {
    name: String,
    email: String,
    comment: String,
  },
  { 
    //handles he createdAt and updatedAt dates
    timestamps: true,
  }
);

const comment = mongoose.models.comment || mongoose.model("comment", commentSchema);
export default comment;
