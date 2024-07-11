import mongoose from "mongoose";
// user, property, rating, and comment.
const reviewSchema = new mongoose.Schema({
       user: {
              type: mongoose.Schema.Type.ObjectId,
              ref: 'User',
              required: true
       },
       property: {
              type: mongoose.Schema.Type.ObjectId,
              ref: 'Property',
              required: true
       },
       rating: {
              type: String,
              required: true
       },
       comment: {
              type: String,
              required: true
       }
});
const Review = mongoose.Model('Review', reviewSchema);
export default reviewSchema;

