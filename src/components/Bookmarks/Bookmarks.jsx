import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 bg-slate-500 ml-5 p-5 rounded-md">
      <h1 className="font-bold text-center text-white mb-3">
        Reading Time: {readingTime}
      </h1>
      <h2 className="font-bold text-center">
        Bookmarked Blog: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          readingTime={readingTime}
          bookmark={bookmark}
        ></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
