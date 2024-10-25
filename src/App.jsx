import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setbookMarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setbookMarks(newBookmarks);
  
  };

  const handleMarkAsRead = (time) => {
   
    setReadingTime(readingTime+time)
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex mx-auto w-11/12">
        <Blogs
        handleBookMarks={handleBookMarks}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
