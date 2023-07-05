import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomePosts } from "../../components/Redux/Actions/ActionHome";
import { fakeButton } from "../../components/Redux/Actions/ActionHome";
import PosteoCardsFake from "../../components/Posts_Proyect/cardsFake/cards";
import CommunityCard from "../../views/Community/communityCards";
import NewsCardsFake from "../news/newsFake/newsCardsFake";
import styles from "./fakeHome.module.css";
import { getUsers } from "../../components/Redux/Actions/User/actionUser";
import { getUserExtras } from "../../components/Redux/Actions/User/actionUser";
import { fakeLogin } from "../../components/Redux/Actions/ActionHome.js";

const FakeHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePosts());
    dispatch(fakeLogin());
    dispatch(getUsers());
    dispatch(getUserExtras());
    dispatch(fakeButton());
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <div className={styles.communityCard}>
        <CommunityCard />
      </div>
      <div className={styles.PosteoCard}>
        <PosteoCardsFake />
      </div>
      <div className={styles.NewsCard}>
        <NewsCardsFake />
      </div>
    </div>
  );
};
export default FakeHome;
