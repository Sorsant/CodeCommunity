import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./communityCard.module.css";
import {
  getAllCommunities,
  getAllLanguages,
} from "../../components/Redux/Actions/Community/ActionCommunity";
import CommunityCard from "../Community/communityCard";

const CommunityCards = () => {
  const dispatch = useDispatch();
  const communities = useSelector((state) => state.community.communities);
  const languages = useSelector((state) => state.community.languages.data);

  useEffect(() => {
    dispatch(getAllCommunities());
    dispatch(getAllLanguages());
  }, [dispatch]);
  return (
    <div className={styles.cards}>
      {communities.length > 0 ? (
        communities.map((community) => {
          const language = languages && languages.find(
            (lang) => String(lang.id) === String(community.language)
          );

          const languageName = language ? language.name : "Unknown Language";

          return (
            <div key={community.id} className={styles.div}>
              <CommunityCard
                id={community.id}
                name={community.name}
                description={community.description}
                language={languageName}
                image={community.image}
              />
            </div>
          );
        })
      ) : (
        <p>Cargando Comunidades...</p>
      )}
    </div>
  );
};

export default CommunityCards;
