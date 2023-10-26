import Task from "./Task"


function TaskList() {

const data = [
    {id:1, descripcion:'Sacar el perro', realizada: false},
    {id:2, descripcion:'Lavar la ropa', realizada: true},
    {id:3, descripcion:'Hacer la tarea', realizada: true},
    {id:4, descripcion:'Hacer el almuerzo', realizada: true},
]

return(
 <div style={{display:'flex',
 flexDirection:'column',
 gap:'5px'
 }}>
{data.map((task) => (
    <Task key={task.id} descripcion = {task.descripcion} realizada = {task.realizada}/>
))}
</div>
)
    

}

export default TaskList