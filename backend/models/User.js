import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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

export default mongoose.model("User", userSchema);
