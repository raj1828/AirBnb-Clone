import mongoose from "mongoose";
// user, property, dates, and payment status
const bookingSchema = new mongoose.Schema({
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
       dates: {
              type: [Date],
              required: true
       },
       paymentStatus: {
              type: String,
              enum: ['pending', 'failed', 'paid'],
              default: 'pending'
       }
})

const Booking = mongoose.Model('Booking', bookingSchema);
export default Booking;