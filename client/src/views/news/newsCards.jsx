import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../components/Redux/Actions/Get/action-get";
import { Getcategory } from "../../components/Redux/Actions/Get/action-get";
import NewsCard from "./newsCard";

const NewsCards = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);
    const category = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getNews());
        dispatch(Getcategory())
    }, [dispatch]);

    if (!Array.isArray(news) || !Array.isArray(category)) {
        return <div>No hay noticias disponibles.</div>;
    }

    const findCategoryById = (categoryId) => {
        return category.find((cate) => cate.id === categoryId);
    };

    return (
        <Carousel fade interval={3000} controls={false}>
            {news.map((news) => {
                const categoryNames = news.category.map((categoryId) => {
                    const category = findCategoryById(categoryId);
                    return category ? category.name : "";
                });

                return (
                    <Carousel.Item key={news.id} >
                        <NewsCard
                            Link={news.link}
                            Category={categoryNames}
                            Author={news.author}
                            Image={news.image}
                            Description={news.description}
                            Title={news.title}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default NewsCards;

