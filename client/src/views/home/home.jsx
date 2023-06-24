import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomePosts } from "../../components/Redux/Actions/Get/action-get";
import PosteoCards from "../../components/Posts_Proyect/Cards/Cards";
import CommunityCard from "../../views/Community/communityCards";
import NewsCard from "../news/newsCards";
import styles from "./home.module.css";
import SearchBar from "../../components/SearchBar/searchBar";
import Filter from "../../components/Filter/Filter";
import Posteohome from "./PostHome/PostHome";
import { getUser } from "../../components/Redux/Actions/Get/action-get";
import { fakeLoggin } from "../../components/Redux/Actions/Fake/fake";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePosts());
    dispatch(fakeLoggin());
  }, [dispatch]);

  // useEffect(() => {
  //     dispatch(getUser());
  //   }, [dispatch]);

  return (
    <div className={styles.Container}>
      <SearchBar />
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