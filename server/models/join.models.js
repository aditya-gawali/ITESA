import mongoose from "mongoose";

const JoinSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter the name"]
        },
        email: {
            type: String,
            required: [true, "Please Enter the email"]
        },
        mobile: {
            type: String,
            required: [true, "Please Enter the mobile"]
        },
        pos: {
            type: String,
            required: [true, "Please Enter the pos"]
        },
        git: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        link: {
            type: String,
        },
        que: {
            type: String,
        },
       
    },
    {
        Timestamp: true
    }
)

const Join = mongoose.model("Join", JoinSchema)

export default Join;