import { Types } from "mongoose";
import { producer } from "..";

export const productCreateProducer = async (data: {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  stock: number;
}) => {
  try {
    await producer.connect();

    const message = {
      topic: "product",
      messages: [
        {
          key: "productcreated",
          value: JSON.stringify(data),
        },
      ],
    };
    await producer.send(message)
  } catch (error: any) {
    console.error("kafka produce error in product service: ", error?.message);
  }
};
