import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Event listeners for Mongoose connection events
    mongoose.connection.on('connected', () => {
      console.log('Database connected successfully.');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('Database disconnected.');
    });

    // Connect to MongoDB (no deprecated options)
    const dbURL = `${process.env.MONGOBD_URL}/Portfolio`;
    await mongoose.connect(dbURL);
    console.log('MongoDB connection established.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
