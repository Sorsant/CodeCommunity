import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterAction, Post } from '../../components/Redux/types';
import { getHomePosts } from '../../components/Redux/action';
import PosteoCards from '../../components/Posts_Proyect/Cards/Cards';
import CommunityCard from '../../views/Community/communityCards';
import NewsCard from '../news/newsCards'
import styles from './home.module.css'
import SearchBar from '../../components/SearchBar/searchBar'
const Home: React.FC = () => {
    const dispatch = useDispatch();

    const handleFilterAbc = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const action: FilterAction = {
            type: "FILTERABC",
            payload: [event.target.value as unknown as Post],
        };
        dispatch(action);
    };

    useEffect(() => {
        dispatch(getHomePosts() as any);
    }, [dispatch]);

    return (
        <div className={styles.Container} >
            <SearchBar />
            <div>
                <div>
                    <select className={styles.select} onChange={event => { handleFilterAbc(event) }} defaultValue={"DEFAULT"}>
                        <option className={styles.option} value="DEFAULT" >Alphabetical</option>
                        <option className={styles.option} value="a-z">From A to Z</option>
                        <option className={styles.option} value="z-a">From Z to A</option>
                    </select>
                </div>
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
