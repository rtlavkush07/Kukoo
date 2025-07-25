import mongoose from 'mongoose';
const messageSchema = new mongoose.Schema({
  
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message:{
    type: String,
    required: true,
    maxLenght: 500,
    trim: true,
    validate: [
        {
            validator: (value) => value.length > 0,
            message: 'Message cannot be empty'
        },

    ],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
},
  {
    timestamps: true // Automatically manage createdAt and updatedAt fields
 });

 const Message = mongoose.model('Message', messageSchema);
 export default Message;