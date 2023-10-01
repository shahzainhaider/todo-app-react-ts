import { ReactNode, createContext, useState, useContext } from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date

}

export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleTodo: (id: string) => void;
    handleDeleteTodo: (id: string) => void

}

export type TodoProviderProps = {
    children: ReactNode

}
export const todosContext = createContext<TodoContext | null>(null)

export const TodosProvider = ({ children }: TodoProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>(()=>{
        try {
            let todos = localStorage.getItem('todos') || 'null';
            return JSON.parse(todos) as Todo[]
        } catch (error) {
            return []
            
        }
    })

    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            localStorage.setItem('todos',JSON.stringify(newTodos))
            
            return newTodos
        })
    }
    const toggleTodo = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) =>{
            let newTodos = prev.filter((todo)=>{
                return todo.id !== id
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
            return newTodos
        })
    }

    return <todosContext.Provider value={{ todos, handleAddTodo, toggleTodo,handleDeleteTodo }}>
        {children}
    </todosContext.Provider>

}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext)
    if (!todosConsumer) throw new Error('useTodos used outside the provider')
    return todosConsumer
}
