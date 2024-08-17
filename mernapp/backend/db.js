const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://swigato:18032003@cluster0.mmhot.mongodb.net/Swigato?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    
    const fetched_data = mongoose.connection.db.collection("fooditems");

    const data = await fetched_data.find({}).toArray(); // Await the data retrieval
    console.log(data);  // Log the data after it's fully retrieved

  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};
 
module.exports = mongoDB;
