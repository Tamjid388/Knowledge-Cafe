
import PropTypes from "prop-types"
import Blog from "../Blog/Blog"
import { useEffect, useState } from "react"



export default function Blogs({handleBookMarks,handleMarkAsRead}) {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
fetch('blog.json')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])

  return (
    <div className="md:w-2/3 space-y-20">
<h1 className="text-4xl">Bolgs {blogs.length}</h1>

{
  blogs.map(blog=> <Blog 
    key={blog.id}
   blog={blog}
   handleBookMarks={handleBookMarks}
   handleMarkAsRead={handleMarkAsRead}
   ></Blog>)
}



    </div>
  )
}

Blogs.proptypes={
  handleBookMarks:PropTypes.func
}
