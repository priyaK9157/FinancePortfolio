import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://priyakumari2002002:PTKqppLRDZ5wF4cl@cluster0.gctrwfc.mongodb.net/Finance", {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
