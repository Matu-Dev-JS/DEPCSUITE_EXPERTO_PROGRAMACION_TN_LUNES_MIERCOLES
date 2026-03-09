## Todo list

## Requisitos: Usar mongoose

Desarrollar los modelos para las colecciones planteadas en todo-list-depc.md
Desarrollar los repositories:
    MissionRepository
        create(title, description, user_id)
        update(mission_id, title, description)
        updateStatus(mission_id, status: boolean) => Si finaliza colocar una finished_date como la fecha actual, si es false se deja en null
        deleteById(mission_id)
    UserRepository
        el mismo de la clase pasada