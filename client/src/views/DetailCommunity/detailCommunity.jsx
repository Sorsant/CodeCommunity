import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunity,
  // getAllLanguages,
} from "../../components/Redux/Actions/Community/ActionCommunity";
import styles from "./detailCommunity.module.css";
//import SmallUser from "../SmallUser/smallUser";
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
          <button className={styles.button}><span>Back to Home</span><lord-icon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            colors="primary:#ffffff"
          >
          </lord-icon>
          </button>
        </Link>

      </div>
      <div className={styles.container1}>
        <CommunityComments />
      </div>
    </div>
  );
};

export default DetailCommunity;
