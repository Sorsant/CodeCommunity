import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../components/Redux/action';
import { AppState } from '../../components/Redux/types';
import PosteoCards from '../../components/Posts_Proyect/Cards/Cards';
import CommunityCard from '../../views/Community/communityCards';
import NewsCard from '../news/newsCards'
import styles from './home.module.css'

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => state.posts);

    useEffect(() => {
        dispatch(getPosts() as any);
    }, [dispatch]);

    return (
        <div className={styles.Container} >
            <div>
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