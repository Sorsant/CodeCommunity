import styles from "./filter.module.css";
import { filterAZ, filterZA, getHomePosts, filterPublications } from "../Redux/Actions/ActionHome"
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.home.posts);

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
  const handleFilterPublications = (event) => {
    const { value } = event.target;

    if (value === "news") {
      dispatch(filterPublications(value));
    }

    if (value === "old") {
      dispatch(filterPublications(value));
    }
  };
  return (
    <div className={styles.container}>
      <select className={styles.selectUno}>
        <option value={'DEFAULT'} disabled>Outstanding</option>
        <option value="All">More like</option>
        <option value="less">Less like</option>
      </select>

      <select className={styles.selectDos} onChange={handleFilterPublications}>
        <option value={'DEFAULT'} disabled>Publications</option>
        <option value="news">Newest</option>
        <option value="old">Older</option>
      </select>

      <select className={styles.selectTres} onChange={handleFilterAZ}>
        <option value={'DEFAULT'} disabled>Order</option>
        <option value="Acn">a-z</option>
        <option value="Dcn">z-a</option>
        <option value="default">Default</option>
      </select>
    </div>
  );
};

export default Filter;
