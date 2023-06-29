import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomePosts } from "../../components/Redux/Actions/ActionHome";
import { fakeButton } from "../../components/Redux/Actions/ActionHome";
import PosteoCards from "../../components/Posts_Proyect/Cards/Cards";
import CommunityCard from "../../views/Community/communityCards";
import NewsCard from "../news/newsCards";
import styles from "./fakeHome.module.css";
import Filter from "../../components/Filter/Filter";
import Posteohome from "../home/PostHome/PostHome";
import { getUsers } from '../../components/Redux/Actions/User/actionUser';
import { getUserExtras } from '../../components/Redux/Actions/User/actionUser';
import { fakeLogin } from "../../components/Redux/Actions/ActionHome.js";

const FakeHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomePosts());
        dispatch(fakeLogin());
        dispatch(getUsers());
        dispatch(getUserExtras())
        dispatch(fakeButton())
    }, [dispatch]);

    return (
        <div className={styles.Container}>
            <Posteohome />
            <div className={styles.filter}>
                <Filter />
            </div>
            <div className={styles.communityCard}>
                <CommunityCard />
            </div>
            <div className={styles.PosteoCard}>
                <PosteoCards />
            </div>
            <div className={styles.NewsCard}>
                <NewsCard />
            </div>
        </div>
    );
};
export default FakeHome;