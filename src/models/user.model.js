import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        authName: {
            type: String,
            required: true,
        },
        pages: {
            type: Number,
            required: true,
        },
        price: {
            type: String,
            required: true
        },
        bookCount: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)