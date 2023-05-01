const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, 
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Use getter method to format date
      get: timestamp => new Date(timestamp).toLocaleDateString(),
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, 
    },
    id: false,
  }
);

module.exports = reactionSchema;
