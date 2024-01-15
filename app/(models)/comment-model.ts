import mongoose, { Schema } from "mongoose";
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

type Comment = {
  name: string;
  email: string;
  comment: string;
}

const commentSchema = new Schema<Comment>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,


    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },

    comment: {
      type: String,
      required: [true, "comment should not be empty"],
      trim: true,
    },
  },
  { 
    //handles he createdAt and updatedAt dates
    timestamps: true,
  }
);

const comment = mongoose.models.comment || mongoose.model("comment", commentSchema);
export default comment;
