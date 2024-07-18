import React,{useState} from "react"
export default function ToDoList(){

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(["Eat Breakfast", "Take a Shower", "Go to Office"])

    function handleInputChange(event){
        event.preventDefault()
        setTodo(event.target.value)

    }

    function addTodo(){
        if(todo.trim() !== ""){
            setTodos(t =>[...t, todo])
            setTodo("")
        }
    }

    function deleteTodo(index){
        const deletedtodos = todos.filter((_,i) => i !== index)
        setTodos(deletedtodos)
    }

    
    return(<div className="to-do-list">
              <h1>To-DO-List</h1> 

               <div>
                     <input type="text" placeholder="Enter a task" value={todo} onChange={handleInputChange}/>
                     <button className="add-button" onClick={addTodo}>Add Task</button>  
               </div>

               <ol>
                {todos.map((todo,index) =>
                <li key={index}>
                    <span className="text">{todo}</span>
                    <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
                </li>
                )}
              </ol>
            </div>      
     )
}
 