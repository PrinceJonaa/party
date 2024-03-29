import mongoose from "mongoose";

const Schema = mongoose.Schema;
const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  codeblock: {
    type: String,
    required: true,
  },
  is_solution: {
    type: Boolean,
    default: false
  },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
}, { timestamps: true });


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
  comments: {commentSchema}

}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);



export {
  Post
}