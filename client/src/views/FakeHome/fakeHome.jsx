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
import Layout from "../../containers/Layout";

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
    <Layout>
      <div className={styles.containerFakeHome}>
        <div className={styles.newsCardFake}>
          <NewsCardsFake />
        </div>
        <div className={styles.PosteoCardFake}>
          <PosteoCardsFake />
        </div>
        <div className={styles.communityCard}>
          <CommunityCard />
        </div>
      </div>
    </Layout>
  );
};
export default FakeHome;
