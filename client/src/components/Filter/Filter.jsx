import React from "react";
import styles from "./Filter.module.css";
import { filterAbc } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AppState, GetFilterABC } from "../Redux/types";
import { Dispatch } from "redux";

const Filter = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  // const handleFilterAbc = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const action: GetFilterABC = {

  //   };
  //   dispatch(action);
  // };

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

      <select className={styles.selectTres} onChange={handleFilterAbc}>
        <option>Order</option>
        <option value="Asc">a-z</option>
        <option value="Desc">z-a</option>
      </select>
    </div>
  );
};

export default Filter;
