const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
       owner: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: 'User'
       },
       location: {
              type: String,
              required: true
       },
       price: {
              type: Number,
              required: true
       },
       availability: {
              type: Boolean,
              required: true
       }

})

const Property = mongoose.modle('Property', propertySchema);
export default Property;