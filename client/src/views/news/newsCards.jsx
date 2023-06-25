import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../components/Redux/Actions/Get/action-get";
import NewsCard from "./newsCard";

const NewsCards = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <Carousel fade interval={3000} controls={false}>
            {news?.map((newsItem) => (
                <Carousel.Item key={newsItem.id} >
                    <NewsCard
                        Link={newsItem.link}
                        Category={newsItem.category.id}
                        Author={newsItem.author}
                        Image={newsItem.image}
                        Description={newsItem.description}
                        Title={newsItem.title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default NewsCards;
