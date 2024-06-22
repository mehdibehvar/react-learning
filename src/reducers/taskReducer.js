export const taskReducer=(tasks,action)=>{
switch (action.type) {
    case "add_task":{
        const {id,text}=action.payload;
        return [...tasks,{
            id,
            text,
            done:false
        }]
    }
    case "edit_task":{
        const editedTask=action.payload;
        return tasks.map(t=>t.id===editedTask.id?editedTask:t)
    }
        
    case "delete_task":{
        const taskId=action.payload;
        return tasks.filter(t=>t.id!==taskId)
    }   
    
    case "change_color_task":{
        const {id,color}=action.payload;
        return tasks.map(t=>t.id===id?{...t,color:color}:t);
    } 
    default:{
        throw Error("unknown action")
    }
        
}
}