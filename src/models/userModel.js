import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String, minlength: 5 },
});

// Un petit peu de sel de guérande
userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

userSchema.methods.validPassword = async (applicantPassword, oldPassword) => {
  const result = await bcrypt.compare(applicantPassword, oldPassword);
  return result;
};
const User = mongoose.model("User", userSchema);

export default User;
