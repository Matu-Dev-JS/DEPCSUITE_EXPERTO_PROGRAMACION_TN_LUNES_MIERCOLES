import mongoose from "mongoose";
const missionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
        fk_user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        },
        finished_date: {
            type: Date,
            required: false,
            default: null
        }
    }
    
)
const Mission = mongoose.model('Mission', missionSchema)
export default Mission