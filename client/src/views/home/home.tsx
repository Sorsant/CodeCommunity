import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../components/Redux/action';
import { AppState } from '../../components/Redux/types';
import PosteoCards from '../../components/Posts_Proyect/Cards/Cards';
import CommunityCard from '../../views/Community/communityCards';
import NewsCard from '../news/newsCards'
import styles from './home.module.css'
import SearchBar from '../../components/SearchBar/searchBar'
import Filter from '../../components/Filter/Filter';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    // const [serchString, setSearchString] = useState("")

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setSearchString(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(getByName(searchString))
    // }

    useEffect(() => {
        dispatch(getPosts() as any);
    }, [dispatch]);

    return (
        <div className={styles.Container} >
            <SearchBar />
            <div className={styles.filter}>
                <Filter/>
            </div>
            {/* <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} /> */}
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

export default Home