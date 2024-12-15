/* eslint-disable react/prop-types */

const NewsCard = ({news}) => {
    console.log(news)
    return (
        <div className="card w-full shadow-xl border rounded-lg p-4 bg-white">
        {/* Dynamic Image */}
        <figure className="w-full">
          <img
            src={news.image_url || "https://via.placeholder.com/400"}
            alt="News Thumbnail"
            className="rounded-lg object-cover"
          />
        </figure>
  
        {/* Card Body */}
        <div className="card-body p-4">
          {/* Dynamic Title */}
          <h2 className="card-title text-lg font-bold text-gray-800">
            {news.title}
          </h2>
  
          {/* Dynamic Details */}
          <p className="text-gray-600 text-sm">
            {news.details.slice(0, 100)}... {/* Limit description */}
          </p>
  
          {/* Author Information */}
          <div className="flex items-center mt-3">
            <img
              src={news.author.img || "https://via.placeholder.com/32"}
              alt="Author Avatar"
              className="w-8 h-8 rounded-full border border-gray-200 mr-2"
            />
            <div>
              <h4 className="text-sm font-semibold">{news.author.name}</h4>
              <p className="text-xs text-gray-500">{news.author.published_date}</p>
            </div>
          </div>
  
          {/* Footer Section */}
          <div className="card-actions justify-between items-center mt-3">
            {/* Dynamic Rating */}
            <div className="flex items-center gap-1 text-yellow-500">
              ⭐ <span className="font-semibold">{news.rating.number}</span> 
              <span className="text-xs">{news.rating.badge}</span>
            </div>
  
            {/* Dynamic Views */}
            <div className="flex items-center gap-1 text-gray-500">
              👁️ <span className="text-sm">{news.total_view} views</span>
            </div>
  
            {/* Read More Button */}
            <button className="btn btn-primary btn-sm text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default NewsCard;