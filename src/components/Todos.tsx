import { useTodos } from "../store/todos"
import {useSearchParams} from 'react-router-dom'

const Todos = () => {
    const {todos,toggleTodo , handleDeleteTodo} = useTodos()
    const [searchParams] = useSearchParams();
    const url = searchParams.get('todos')

    let filterData = todos

    if(url === 'compeleted'){
        filterData =filterData.filter((todo)=>{
            return todo.completed
        })
    }
    if(url === 'active'){
        filterData =filterData.filter((todo)=>{
            return !todo.completed
        })
    }

  return (
    <>
    <ul className="list">
        {
            filterData.map((todo)=>{
                return (<li key={todo.id} className="flex h-10 px-10 border-b py-8 box-border items-center" >
                    <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
                    <label className="ml-3 text-lg tracking-wider font-mono" htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    {
                        todo.completed &&(
                            <button type="button" onClick={()=>handleDeleteTodo(todo.id)} className="px-4 py-2 bg-red-600 text-white ml-auto rounded-md">delete</button>
                        )
                    }

                </li>)

            })
        }
    </ul>
      
    </>
  )
}

export default Todos
