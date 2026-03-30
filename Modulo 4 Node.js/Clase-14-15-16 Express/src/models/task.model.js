import mongoose from "mongoose"
import { TASK_DIFFICULTY, TASK_STATUS } from "../constants/task.constant.js"

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
        type: Date,
        default: Date.now,
    },
    status:{
        type: String,
        enum: [TASK_STATUS.PENDING, TASK_STATUS.IN_PROGRESS, TASK_STATUS.COMPLETED],
        default: TASK_STATUS.PENDING
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
        enum: [TASK_DIFFICULTY.EASY, TASK_DIFFICULTY.MEDIUM, TASK_DIFFICULTY.HARD],
        default: TASK_DIFFICULTY.EASY,
    }
})
const Task = mongoose.model("Task", taskSchema)
export default Task