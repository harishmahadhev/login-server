import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resettoken: String,
    expiretoken: Date,
});

export const loginData = mongoose.model("LoginData", loginSchema);