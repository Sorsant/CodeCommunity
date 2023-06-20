import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHomePosts } from '../../components/Redux/action';
import PosteoCards from '../../components/Posts_Proyect/Cards/Cards';
import CommunityCard from '../../views/Community/communityCards';
import NewsCard from '../news/newsCards';
import styles from './home.module.css';
import SearchBar from '../../components/SearchBar/searchBar';
import Filter from '../../components/Filter/Filter';
import Posteohome from './PostHome/PostHome'
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomePosts());
    }, [dispatch]);

    return (
        <div className={styles.Container}>
            <SearchBar />
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

export default Home;
