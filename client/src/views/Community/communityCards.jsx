import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./communityCard.module.css";
import { getAllCommunities } from "../../components/Redux/Actions/Get/action-get";
import { getAllLanguages } from "../../components/Redux/Actions/Get/action-get";
import CommunityCard from "../Community/communityCard";

const CommunityCards = () => {
    const dispatch = useDispatch();
    const communities = useSelector((state) => state.communities);
    const languages = useSelector((state) => state.languages);

    useEffect(() => {
        dispatch(getAllCommunities());
        dispatch(getAllLanguages());
    }, [dispatch]);

    if (!Array.isArray(communities) || !Array.isArray(languages)) {
        return <div>No hay comunidades disponibles.</div>;
    }

    const findLanguageById = (languageId) => {
        return languages.find((lang) => lang.id === languageId);
    };

    return (
        <div className={styles.cards}>
            {communities.map((community) => {
                const languageNames = community.language.map((languageId) => {
                    const language = findLanguageById(languageId);
                    return language ? language.name : "";
                });

                return (
                    <div key={community.name} className={styles.div}>
                        <CommunityCard
                            id={community.id}
                            name={community.name}
                            description={community.description}
                            language={languageNames}
                            image={community.image}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CommunityCards;
