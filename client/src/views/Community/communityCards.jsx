import React from "react";
import { useEffect } from "react";
import CommunityCard from "./communityCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "./communityCard.module.css";
import { getAllCommunities } from "../../components/Redux/Actions/Get/action-get";

const CommunityCards = () => {

    const dispatch = useDispatch();
    const communities = useSelector((state) => state.communities);

    useEffect(() => {
        dispatch(getAllCommunities())
    }, [dispatch]);

    return (
        <div className={styles.cards}>
            {
                communities?.map((community) => {
                    return(
                        <div key={community.name} className={styles.div}>
                            <CommunityCard 
                            name={community.name}
                            description={community.description}
                            language={community.language}
                            image={community.image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommunityCards;