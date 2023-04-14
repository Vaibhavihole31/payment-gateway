import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connnectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if(conn) {
    console.log('MongoDB connected successfully!🌼💙🥳');
  }
}
connnectDB();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

