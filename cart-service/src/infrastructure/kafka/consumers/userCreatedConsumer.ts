import { Schema } from "mongoose";
import { insertUser } from "../../database/mongoDB/repositories";

export default async (data: {
  _id: Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
}) => {
  try {
    console.log("usercreated through consumer in cart service")
    await insertUser(data);
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
