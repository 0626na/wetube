import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = () =>
  console.log(`Error on DB Connection:${error.handleError}`);

const handleOpen = () => {
  console.log("connected to DB");
};

db.once("open", handleOpen);
db.on("error", handleError);
