import mongoose from "mongoose";

export const connectDb = () => {
    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((error) => {
        console.log("Error connecting to database:", error);
      });
}
