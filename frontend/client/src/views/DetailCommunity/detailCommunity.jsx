import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunity,
  // getAllLanguages,
} from "../../components/Redux/Actions/Community/ActionCommunity";
import styles from "./detailCommunity.module.css";
import SmallUser from "../SmallUser/smallUser";
import CommunityComments from "../CommunitiesInteractions/communityComments";

const DetailCommunity = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // const languages = useSelector((state) => state.community.languages.data);
  const community = useSelector((state) => state.community.communities);


  useEffect(() => {
    dispatch(getCommunity(id)).catch((error) => {
      window.alert("Community not found");
    });

    // dispatch(getAllLanguages());
  }, [dispatch, id]);

  // const getLanguageNames = () => {
  //   if (community && Array.isArray(community.languages)) {
  //     return community.language.map((languageId) => {
  //       const language = languages && languages.find((lang) => String(lang.id) === languageId);
  //       return language ? language.name : "";
  //     });
  //   } else {
  //     const language = languages && languages.find((lang) => lang.id === community.language);
  //     return language ? language.name : "Unknown Language";
  //   }
  // };


  // const languageNames = getLanguageNames();

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.name}>{community.name}</h1>
        <img
          src={community.image}
          alt={community.image}
          className={styles.image}
        />
        {/* <h1>{languageNames}</h1> */}
        <p className={styles.description}>{community.description}</p>

        <Link to="/home">
          <button className={styles.button}><svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
            <span>Home</span></button>
        </Link>

      </div>
      <div className={styles.container1}>
        <CommunityComments />
      </div>
    </div>
  );
};

export default DetailCommunity;
