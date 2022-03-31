import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  codeblock: {
    type: String,
    required: true,
  },
  is_resolved: {
    type: Boolean,
    default: false
  },

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export {
  Post
}