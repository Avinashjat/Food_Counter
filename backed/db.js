
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://avinash_jat:foodcounter123@foodcounter.kai73wi.mongodb.net/foodcounter_database?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB successfully");

        const fetched_data = mongoose.connection.db.collection("food_item");
        const data = await fetched_data.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const foodCat = await foodCategory.find({}).toArray(); // Remove the callback function

        global.food_item = data;
        global.foodCategory = foodCat;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        // Do not close the connection here
    }
}

module.exports = mongoDB;















