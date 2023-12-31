import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommunity,

} from "../../components/Redux/Actions/Community/ActionCommunity";
import Loading from "../../components/Loading/Loading";
import styles from "./detailCommunity.module.css";

import CommunityComments from "../CommunitiesInteractions/communityComments";

const DetailCommunity = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  const community = useSelector((state) => state.community.communities);
  const [isLoading, setIsLoading] = useState(true);
  const [communitys, setCommunity] = useState(null);


  useEffect(() => {
    dispatch(getCommunity(id))
      .then((response) => {
        setCommunity(response);
        setIsLoading(false);
      })
      .catch((error) => {
        window.alert("Community not found");
        setIsLoading(false);
      });
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />; // Mostrar el componente Loading mientras se cargan los datos
  }


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
