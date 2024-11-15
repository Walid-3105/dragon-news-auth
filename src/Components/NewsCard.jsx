import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="mb-5 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
      {/* Author and Date */}
      <div className="flex items-center mb-3">
        <img
          src={news.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-800 text-sm">
            {news.author.name}
          </p>
          <p className="text-gray-500 text-xs">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
        {news.title}
      </h2>

      {/* Thumbnail Image */}
      <img
        src={news.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-48 object-cover mb-3 rounded-lg"
      />

      {/* Details */}
      <p className="text-gray-500 text-sm mb-4">
        {news.details.slice(0, 100)}...{" "}
        <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
          Read More
        </span>
      </p>

      {/* Rating and Views */}
      <div className="flex justify-between items-center mt-4">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="text-gray-700 ml-2 font-medium">
            {news.rating.number}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            ({news.rating.badge})
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaEye className="text-gray-500" />
          <span className="ml-2 text-gray-700">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
