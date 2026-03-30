import { TASK_STATUS } from "../constants/task.constant.js";
import Task from "../models/task.model.js";



class TaskRepository {

    async create(fk_mission_id, title, description, difficulty, estimated_time_min) {
        await Task.create({
            title,
            description,
            fk_mission_id: fk_mission_id,
            difficulty,
            estimated_time_min
        })
    }

    async updateById(task_id, description, difficulty, estimated_time_minutes) {
        const updated_task = await Task.findByIdAndUpdate(
            task_id,
            {
                description,
                difficulty,
                estimated_time_minutes
            },
            { returnDocument: 'after' }
        )
        return updated_task;
    }

    async updateStatusById( task_id, new_status ){
        /* console.log(!this.isValidStatus(new_status)) */
  
        if(!(this.isValidStatus(new_status))){
            throw new Error(`El estatus ${new_status} no es valido, estatus validos: ${Object.values(TASK_STATUS).join(', ')}`)
        }
        
        Task.findByIdAndUpdate(
            task_id, {
                status: new_status, 
                finish_date: new_status !== TASK_STATUS.COMPLETED ? null : new Date()
            }
        )
    }
    /* - updateStatus(task_id, status: enum ( pending, in_progress, finished)) */


    isValidStatus(status){
       
        return  Object.values(TASK_STATUS).includes(status)
    }
}


const taskRepository = new TaskRepository()
export default taskRepository

/* const persona = {
    nombre: 'pepe',
    edad: 50
}

Object.keys(persona)// ??que espero recibir: ['nombre', 'edad'] .join('-') => 'nombre-edad'
Object.values(persona)// ??que espero recibir: ['pepe', 50] */