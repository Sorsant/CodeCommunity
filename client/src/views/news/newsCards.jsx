import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../components/Redux/Actions/News/actionNews";
import { getCategories } from "../../components/Redux/Actions/News/actionNews";
import NewsCard from "./newsCard";
import "./newsCards.module.css";

const NewsCards = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const category = useSelector((state) => state.news.category);

  useEffect(() => {
    dispatch(getNews());
    dispatch(getCategories());
  }, [dispatch]);

  if (!Array.isArray(news) || !Array.isArray(category)) {
    return <div>No hay noticias disponibles.</div>;
  }

  const findCategoryById = (categoryId) => {
    return category.find((cate) => cate.id === categoryId);
  };

  return (
    <Carousel
      fade
      interval={3000}
      controls={false}
      nextIcon={null}
      prevIcon={null}
      indicators={false}
      style={{ height: "500px", marginTop: "-120px" }}
    >
      {news.map((news) => {
        const categoryNames = news.category.map((categoryId) => {
          const category = findCategoryById(categoryId);
          return category ? category.name : "";
        });

        return (
          <Carousel.Item key={news.id} style={{ height: "1500px" }}>
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
