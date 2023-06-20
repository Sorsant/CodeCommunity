import React, { useEffect } from "react";
import styles from "./filter.module.css";
import { filterAZ, filterZA } from "../Redux/action"
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const filterAbc = useSelector((state) => state.filterAbc);

  const handleFilterAZ = (event) => {

    if (event === "a-z") {
      dispatch(filterAZ)
    }
    if (event === "z-a") {
      dispatch(filterZA)
    }

    const { value } = event.target
    dispatch(filterAbc(value))
  };

  useEffect(() => {
    dispatch(filterAZ());
  }, [dispatch]);

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
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
    </div>
  );
};

export default Filter;
