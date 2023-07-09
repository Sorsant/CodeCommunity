import styles from "./filter.module.css";
import { filterAZ, filterZA, getHomePosts, filterPublications } from "../Redux/Actions/ActionHome"
import { useDispatch, useSelector } from "react-redux";
import { filterAllLikes, filterLessLikes } from "../Redux/Actions/ActionHome";
import PostHome from '../../views/home/PostHome/PostHome'
const Filter = () => {
  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const dispatch = useDispatch()

  const handleFilterAZ = (event) => {
    const { value } = event.target;
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

  const handleLikes = (event) => {
    const { value } = event.target;

    if (value === "All") {
      dispatch(filterAllLikes(value));
    }

    if (value === "less") {
      dispatch(filterLessLikes(value));
    }
  };
  ;


  return (<div>
    <div className={styles.container}>{
      extra && extra.premium !== false ? (
        <PostHome />) : null
    }
      <select className={styles.selectUno} onChange={handleLikes}>
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

  </div>
  );
};

export default Filter;
