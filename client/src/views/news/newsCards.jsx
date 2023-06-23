import NewsCard from "./newsCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNews } from "../../components/Redux/Actions/Get/action-get";

const NewsCards = () => {
const dispatch = useDispatch()
const news = useSelector(state => state.news)

useEffect(() => {
    dispatch(getNews());
}, [dispatch]);

    return (
        <div>
            {
                news?.map((news) => {
                    return(
                        <div key={news.id} >
                            <NewsCard 
                            Link={news.link}
                            Category={news.category.name}
                            Author={news.author}
                            Image={news.image}
                            Description={news.description}
                            Title={news.title}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NewsCards