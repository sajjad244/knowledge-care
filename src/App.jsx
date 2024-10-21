import {useState} from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBooksMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBooksMark={handleAddToBooksMark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
