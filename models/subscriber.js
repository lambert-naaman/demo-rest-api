const { default: mongoose } = require("mongoose");


//define schema model to be used for all subscribers
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required:true,
    default: Date.now
  }
})
 
module.exports = mongoose.model('subscriber', subscriberSchema)