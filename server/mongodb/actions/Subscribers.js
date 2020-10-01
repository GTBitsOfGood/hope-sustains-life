import mongoDB from "../index";
import Subscriber from "../models/Subscriber";

export async function getSubscribers() {
  await mongoDB();

  try {
    return Subscriber.find({});
  } catch (error) {
    throw new Error(error.message);
  }
}
