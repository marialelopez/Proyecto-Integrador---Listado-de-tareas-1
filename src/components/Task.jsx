const Task = ({descripcion,realizada}) =>{
    return(
        <div style={{ 
        display:'flex', 
        alignItems:"center",
         gap:'5px', 
         padding:'10px', 
         justifyContent:'space-between',
         backgroundColor:'#ffe1d5',
         borderRadius:'5px',
         fontSize:'17px'
         }}>
         {descripcion}
         <p>{realizada}</p>
        <button style={{border:'solid #f74780'}}>Borrar</button>
        </div>
    )
}

export default Task