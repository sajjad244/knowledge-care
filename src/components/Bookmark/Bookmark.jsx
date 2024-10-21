import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;

  return (
    <div className="bg-slate-800 mt-3 p-2 rounded-xl text-white">
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
