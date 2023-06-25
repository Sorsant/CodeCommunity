import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../components/Redux/Actions/Get/action-get';
import styles from "./Instructor.module.css";
import { Link } from "react-router-dom";


const Instructor = () => {
  const users = useSelector(state => state.users);
  console.log("users:", users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const usersWithPostulation = users.filter(user => user.postulation);

  return (
    <div>
      {console.log({usersWithPostulation})}
      <h1> Instructores Disponibles </h1>
      <div>
        {usersWithPostulation.map(user => (
          <div key={user.id} className={styles.card}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.language}</p>
            {<button className={styles.link}><Link>Paga a este Instructor</Link></button>}
          </div>
        ))}
      </div>
      
    </div>
  );
};



export default Instructor;
