import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String, 
            required: true, 
            unique: true
        },
        password: {
            type: String, 
            required: true
        },
        username: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        active: {
            type: Boolean,
            default: true
        },
        email_verified: {
            type: Boolean,
            default: false
        }
    }
)

const User = mongoose.model('User', userSchema)

export default User