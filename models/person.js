const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  {
    versionKey: false, // Exclude the '__v' field
    timestamps: true, // Add 'createdAt' and 'updatedAt' fields
  }
);

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
