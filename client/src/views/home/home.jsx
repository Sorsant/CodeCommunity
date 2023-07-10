import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomePosts } from "../../components/Redux/Actions/ActionHome";
import PosteoCards from "../../components/Posts_Proyect/Cards/Cards";
import CommunityCard from "../../views/Community/communityCards";
import NewsCard from "../news/newsCards";
import styles from "./home.module.css";
import Filter from "../../components/Filter/Filter";
import { getUsers } from "../../components/Redux/Actions/User/actionUser";
import { getUserExtras } from "../../components/Redux/Actions/User/actionUser";
import { fakeLogin } from "../../components/Redux/Actions/ActionHome.js";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePosts());
    dispatch(fakeLogin());
    dispatch(getUsers());
    dispatch(getUserExtras());
  }, [dispatch]);

  return (
    <div className={styles.containerHome}>
      <div className={styles.postHomeNews}>
        <div className={styles.NewsCard}>
          <NewsCard />
        </div>
      </div>
      <div className={styles.filterPostCard}>
        <div className={styles.filter}>

          <Filter />
        </div>
        <div className={styles.PostCard}>
          <PosteoCards />
        </div>
      </div>
      <div className={styles.communityCard}>
        <CommunityCard />
      </div>
    </div>
  );
};

export default Home;
