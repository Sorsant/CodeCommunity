import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunity } from "../../components/Redux/Actions/Get/action-get";
import styles from "./detailCommunity.module.css"

const DetailCommunity = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const languages = useSelector((state) => state.languages);

    const [communityID, setCommunity] = useState({})

    useEffect(() => {
        dispatch(getCommunity(id)).then(response => {
            setCommunity(response.payload)
        }).catch(error => {
            window.alert("community not found")
        })
    }, [dispatch, id]);

    //     // const languageNames = communityID.language?.map((languageId) => {
    //     //     const language = languages.find((lang) => lang.id === languageId);
    //     //     return language ? language.name : "";
    // });
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>{communityID.name}</h1>
            <img src={communityID.image} alt={communityID.image} className={styles.image} />
            <p className={styles.language}>{communityID.language}</p>
            <p className={styles.description}>{communityID.description}</p>
        </div>
    )
}

export default DetailCommunity;