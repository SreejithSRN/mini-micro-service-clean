import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    console.log(mongoUrl)
    if (!mongoUrl) {
      throw new Error(
        "MongoDB connection string not provided in environment variables"
      );
    }
    await mongoose.connect(mongoUrl.trim());
    console.log(" Auth-Database COnnected Successfully");
  } catch (error: any) {
    console.error("database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};
