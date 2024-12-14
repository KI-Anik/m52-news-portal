import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(result => setCategories(result.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="font-semibold mb-2">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 *:bg-base-100">
                {
                    categories.map(cate => <NavLink 
                        to={`category/${cate.category_id}`} 
                        className="btn"
                        key={cate.category_id}>
                        {cate.category_name}
                    </NavLink >)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;