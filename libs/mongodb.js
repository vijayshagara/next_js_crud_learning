// import mongoose from "mongoose";
// let uri =
//   process.env.MONGODB_URI

// const connectMongoDb = async () => {
//   try {
//     if (uri) {
//       await mongoose.connect(uri);
//     }
//     console.log("mongoose connected successfully");
//   } catch (error) {
//     console.log("mongo_error=====", error);
//   }
// };

// export default connectMongoDb;

import mongoose from 'mongoose';

let isConnected = false;

export const connectMongoDb = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = connection.readyState === 1;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');
  }
};

