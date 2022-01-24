import mongoose from "mongoose";

const { Schema } = mongoose

const User = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    createdDate: {
        type: Date,
    }
})

export default mongoose.model('User', User)
