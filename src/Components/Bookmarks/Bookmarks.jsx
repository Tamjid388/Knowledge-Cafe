import React from 'react'
import BookMark from '../BookMark/BookMark'
export default function Bookmarks({bookMarks,readingTime}) {
  return (
    
    <div className="md:w-1/3 ">
      <div>
        <h2  className='text-4xl'>Reading Time: {readingTime}</h2>
      </div>
        <h1 className="text-4xl">Bookmarked Blogs:{bookMarks.length}</h1>
   
    {
      bookMarks.map(bookmark=> <BookMark bookmark={bookmark}></BookMark>)
    }
   </div>
   )

}
