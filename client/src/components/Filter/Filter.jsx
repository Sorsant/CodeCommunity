import React, { useEffect } from "react";
import styles from "./filter.module.css";
import { filterAZ, filterZA, getHomePosts } from "../Redux/Actions/Get/action-get"
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  // const filterAbc = useSelector((state) => state.filterAbc);

  const handleFilterAZ = (event) => {
    const { value } = event.target

    if (value === "Acn") {
      dispatch(filterAZ())
    }
    if (value === "Dcn") {
      dispatch(filterZA())
    }
    if (value === "default") {
      dispatch(getHomePosts())
    }
  };

  // useEffect(() => {
  //   dispatch(filterAZ());
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <select className={styles.selectUno}>
        <option value="like">Outstanding</option>
        <option value="All">More like</option>
        <option value="less">Less like</option>
      </select>

      <select className={styles.selectDos}>
        <option>Publications</option>
        <option value="news">Newest</option>
        <option value="old">Older</option>
      </select>

      <select className={styles.selectTres} onChange={handleFilterAZ}>
        <option>Order</option>
        <option value="Acn">a-z</option>
        <option value="Dcn">z-a</option>
        <option value="default">Default</option>
      </select>
    </div>
  );
};

export default Filter;
