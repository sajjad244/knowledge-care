import {useEffect} from "react";
import {useState} from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBooksMark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-3xl font-black mb-8 bg-purple-500 p-4 rounded-md">
        Blogs: {blogs.length}
      </h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBooksMark={handleAddToBooksMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBooksMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blogs;
