import NewsCard from "./newsCard";
import { Data } from "./news"

const NewsCards: React.FC = () : JSX.Element => {
    return (
        <div>
            {
                Data?.map((news) => {
                    return(
                        <div key={news.Title} >
                            <NewsCard 
                            Link={news.Link}
                            Category={news.Category}
                            Author={news.Author}
                            Image={news.Image}
                            Date={news.Date}
                            Description={news.Description}
                            Title={news.Title}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NewsCards