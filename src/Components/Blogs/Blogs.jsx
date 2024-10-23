import Blog from "../Blog/Blog"
import { useEffect, useState } from "react"


export default function Blogs() {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])

  return (
    <div className="md:w-2/3">
<h1 className="text-4xl">Bolgs {blogs.length}</h1>
    </div>
  )
}
