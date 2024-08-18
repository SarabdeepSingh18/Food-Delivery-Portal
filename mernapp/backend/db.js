const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://swigato:18032003@cluster0.mmhot.mongodb.net/Swigato?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    
    // Fetch food items
    const fetched_data = await mongoose.connection.db.collection("fooditems").find({}).toArray();
    global.food_items = fetched_data;

    // Fetch food categories
    const foodcategory_data = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
    global.foodcategory = foodcategory_data;
    
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  }
};
 
module.exports = mongoDB;
