import mongoose from "mongoose";
require("dotenv").config();

console.log(process.env.MONGO_URI);
export default async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("admin_DB connected succesfully");
  } catch (error: any) {
    console.error("database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};
