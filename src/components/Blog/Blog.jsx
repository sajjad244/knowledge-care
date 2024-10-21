import PropTypes from "prop-types";
import {FaBookBookmark} from "react-icons/fa6";

const Blog = ({blog, handleAddToBooksMark, handleMarkAsRead}) => {
  const {
    title,
    cover,
    hashtags,
    reading_time,
    author_img,
    author,
    posted_date,
  } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex mb-4">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBooksMark(blog)}
            className="ml-4 text-red-500"
          >
            <FaBookBookmark></FaBookBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-blue-700 mt-5 font-bold"
      >
        Mark As Read{" "}
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBooksMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
