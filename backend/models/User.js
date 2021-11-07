const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      String,
      required: {type: Boolean, default: true}
    },
    email: {
      String,
      required:{type: Boolean, default: true},
      unique: {type: Boolean, default: true}
    },
    password: {
      type: {type: String},
      required: {type: Boolean, default: true}
    },
    register_date: {
      type: Date,
      default: Date.now
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
