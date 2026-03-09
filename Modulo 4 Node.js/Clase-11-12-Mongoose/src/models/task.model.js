import mongoose from "mongoose"
const taskSchema = new mongoose.Schema({
    fk_mission_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mission",
    },
    description:{
        type: String,
        required: true
    },
    created_at:{
        type: date,
        default: Date.now,
    },
    status:{
        type: String,
        enum: ["Pendiente", "En progreso", "Completada"],
        default: "Pendiente"
    },
    finish_date: {
        type: Date,
        required: false,
        default: null,
    },
    estimated_time_minutes: {
        type: Number,
        required: false,
        default: 0,
    },
    difficulty: {
        type: String,
        enum: ["Fácil", "Medio", "Difícil"],
        default: "Fácil",
    }
})
const Task = mongoose.model("Task", taskSchema)
export default Task