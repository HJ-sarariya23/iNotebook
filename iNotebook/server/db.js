const mongoose = require("mongoose");

// usl for connect database
const mongoURI =
  "mongodb+srv://harshil:harshilsarariya@cluster0.gaqgj.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
