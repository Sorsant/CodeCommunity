import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommunity } from "../../components/Redux/Actions/Get/action-get";
import SmallUser from "../SmallUser/smallUser";
import styles from "./detailCommunity.module.css"

const DetailCommunity = () => {
    
    const dispatch = useDispatch();
    const { name } = useParams();

    const community = useSelector((state) => state.detailCommunity)

    useEffect(() => {
        dispatch(getCommunity(name))
    }, [dispatch, name]);

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>{community.name}</h1>
            <img src={community.image} alt={community.image} className={styles.image}/>
            <SmallUser />
            <p className={styles.language}>{community.language}</p>
            <p className={styles.description}>{community.description}</p>
        </div>
    )
}

export default DetailCommunity;