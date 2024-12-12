const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "Please add a First Name."],
    },
    email: {
      type: String,
      require: [true, "Please add an Email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add an password"],
    },
    role: {
      type: String,
      required: false,
    },

    // To track connected clients
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = userModel;
