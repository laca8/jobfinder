import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(`mongodb+srv://laca:${jae09908}@cluster0.gjxhg.mongodb.net/${jobfinder}`);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
