import mongoose from "mongoose";
let uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://vijayshagara:imA8WKHYHnhtcpam@cluster0.izhgdaj.mongodb.net/next_crud";

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
