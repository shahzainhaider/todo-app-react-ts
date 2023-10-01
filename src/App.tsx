import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"

function App() {

  return (
    <>
    <div className="flex justify-center items-center h-screen select-none">
    <div className="w-[60%] overflow-y-scroll h-[80%] rounded-md mx-auto p-10">
      <h1 className="text-center text-6xl font-bold mb-8">TODO LIST</h1>
      <Navbar/>
      <AddToDo/>
      <Todos/>
    </div>
    </div>
    </>
  )
}

export default App
