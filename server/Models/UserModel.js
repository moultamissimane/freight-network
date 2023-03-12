const Schema = require("mongoose").Schema;
const model = require("mongoose").model;
const hash = require("bcryptjs").hash;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  console.log("Just before saving before hashing", user.password);
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await hash(user.password, 8);
  console.log("Just before saving & after hashing", user.password);
});

const User = model("user", userSchema);
module.exports = User;
