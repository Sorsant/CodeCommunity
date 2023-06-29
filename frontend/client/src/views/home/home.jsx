import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomePosts } from "../../components/Redux/Actions/ActionHome";
import PosteoCards from "../../components/Posts_Proyect/Cards/Cards";
import CommunityCard from "../../views/Community/communityCards";
import NewsCard from "../news/newsCards";
import styles from "./home.module.css";
import Filter from "../../components/Filter/Filter";
import Posteohome from "./PostHome/PostHome";
import { getUsers } from "../../components/Redux/Actions/User/actionUser";
import { Getcategory } from "../../components/Redux/Actions/News/actionNews";
import { fakeLogin } from "../../components/Redux/Actions/ActionHome.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePosts());
    dispatch(fakeLogin());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <Posteohome />
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.communityCard}>
        <h1 className={styles.title1}>Comunidades</h1>
        <CommunityCard />
      </div>
      <div className={styles.PosteoCard}>
        <PosteoCards />
      </div>
      <div className={styles.NewsCard}>
        <h1 className={styles.title2}>Noticias</h1>
        <NewsCard />
      </div>
    </div>
  );
};

export default Home;
