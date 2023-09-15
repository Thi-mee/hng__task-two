const mongoose = require("mongoose");

module.exports = async () => {
  const uri = process.env.ATLAS_URI;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
