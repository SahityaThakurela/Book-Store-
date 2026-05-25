import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/BookStore`)
    } catch (error) {
        console.log("Conenction Failed", error)
        throw error
    }
}

export default connectDb
