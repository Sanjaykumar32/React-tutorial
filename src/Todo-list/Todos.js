import React from 'react'
import { TodosItem } from "../Todo-list/TodosItem"

export const Todos = (props) => {

    // console.log(props.todos[1])
  return (
     
    <>
   <div className='text-center'> 
   <div>Todos</div>
   {props.todos.map((todo)=>{
     return(
         <TodosItem todo={todo} key={todo.sno}/>
     )
   })}
   
   </div>
     
    </>
    
  ) 
}
