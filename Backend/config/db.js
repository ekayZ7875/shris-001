import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, { dbName: "Shris" });
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
