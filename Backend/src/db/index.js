import mongoose from "mongoose"

const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URI} / ${process.env.DB_NAME}`)
        console.log(`mongoDB connection succesfull on port ${process.env.PORT}`);
    } catch (error) {
        console.log("mongoDB connectuin failed || ", error);
        process.exit(1);
    }
}

export default connectDB