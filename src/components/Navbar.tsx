import { Link,useSearchParams } from "react-router-dom"


const Navbar = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('todos')

  return (
    <>
    <div className="flex justify-around items-center text-xl font-semibold text-slate-400 p-2 border-b">
      <Link to={'/'} className={url ===null? 'active':''}>All</Link>
      <Link to={'/?todos=active'} className={url ==='active'? 'active':''}>Active</Link>
      <Link to='/?todos=compeleted' className={url ==='compeleted'? 'active':''}>Compeleted</Link>
    </div>
    </>
  )
}

export default Navbar
