import {useState } from "react"
import { useTodos } from "../store/todos";

const AddToDo = () => {
    const [todo,setTodo] = useState('');
    const {handleAddTodo} = useTodos();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
    }
  return (
    <div className="mt-6 mb-8 flex justify-center border-b-2 border-slate-400 p-2">
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={todo} placeholder="enter your todo" onChange={(e)=>setTodo(e.target.value)} className="border-2 w-96  p-2 border-slate-300" />
            <button disabled={todo.length<3} className="mx-2 px-4 py-2 disabled:bg-green-400 bg-green-600 text-white rounded-md" type="submit">ADD</button>
        </form>
      
    </div>
  )
}

export default AddToDo
