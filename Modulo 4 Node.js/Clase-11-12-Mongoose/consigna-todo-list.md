## Todo list

## Requisitos: Usar mongoose

Desarrollar los modelos para las colecciones planteadas en todo-list-depc.md
Desarrollar los repositories:
    MissionRepository
        - create(title, description, user_id)
        - update(mission_id, title, description)
        - updateStatus(mission_id, status: boolean) => Si finaliza colocar una finished_date como la fecha actual, si es false se deja en null
        - deleteById(mission_id)


        - getMissionsByUserId(user_id) => Devuelve todas las misiones asociadas al usuario
        
    TaskRepository
        - create(title, description, mission_id, difficulty, estimated_time_min)
        - update(task_id, description, difficulty, estimated_time_min)
        - updateStatus(task_id, status: enum ( pending, in_progress, finished))
        - getAllByMissionId(mission_id) => Devuelve todas las tareas asociadas a la misión
        - deleteById(task_id)
        - getDetailed(task_id) => Devuelve la tarea con todos los detalles

    UserRepository
        el mismo de la clase pasada

    