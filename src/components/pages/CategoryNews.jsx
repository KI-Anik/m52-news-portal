import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data : news} = useLoaderData()
    return (
        <div>
            <h2 className="font-bold mb-4">Dragon News Home</h2>
            <p className="text-sm text-gray-500">{news.length} news found to this category</p>
            {
                news.map(singleNews => 
                <NewsCard key={singleNews._id} news={singleNews} ></NewsCard>
                )
            }
        </div>
    );
};

export default CategoryNews;