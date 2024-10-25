import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";

export default function Blog({blog,handleBookMarks,handleMarkAsRead}) {
  const {title,cover,author_image,author,reading_time,posted_date
    ,hashtags
  }=blog
  return (
    <div className="border-2 space-y-4">
     
      <img src={cover} alt="" />
<h2 className="text-2xl">{title}</h2>
<div className="flex justify-between">
  <div className="flex">
    <img className="w-14 rounded-3xl" src={author_image} alt="" />
    <div className="ml-6">
      <h3 className="text-2xl">{author}</h3>
      <p>{posted_date}</p>
    </div>


  </div>

  <div className="space-x-1 flex justify-center  items-center">
    <p>{reading_time} min read</p>
    <button onClick={()=>handleBookMarks(blog)}
    className="text-2xl text-red-800"> <CiBookmark /> </button>
     </div>
</div>
<p>
  {
    hashtags.map(hash=><span className="mr-2">{hash}</span> )
  }
   </p>
   <button 
   onClick={()=>handleMarkAsRead(reading_time)}
   className="text-blue-500 underline">Mark As Read</button>


    </div>
  )
}
Blog.proptypes={
  blog:PropTypes.object.isRequired
}