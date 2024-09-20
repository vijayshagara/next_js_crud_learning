import mongoose from "mongoose";
let uri =
  process.env.MONGODB_URI

const connectMongoDb = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
    }
    console.log("mongoose connected successfully");
  } catch (error) {
    console.log("mongo_error=====", error);
  }
};

export default connectMongoDb;
