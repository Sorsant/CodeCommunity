import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, getUserExtras } from "../../components/Redux/Actions/User/actionUser";
import { getAllLanguages } from '../../components/Redux/Actions/Community/ActionCommunity';
import { useLocation } from 'react-router-dom';

const PayInstructor = () => {
  const users = useSelector(state => state.home.users);
  const userExtras = useSelector(state => state.home.userExtra);
  const languages = useSelector(state => state.community.languages);
  const dispatch = useDispatch();
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);
  const user = users.find(user => user.id === id);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserExtras());
    dispatch(getAllLanguages());
  }, [dispatch]);

  console.log("id:", id);
  console.log("user:", user);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.first_name} {user.last_name}</h2>
          
          {userExtras.map(extraUser => {
            if (extraUser.id === user.id) {
              return (
                <div key={extraUser.id}>
                  <p>{user.email}</p>
                  {/* <img src={extraUser.user_image} alt={user.first_name} /> */}
                  <p>{extraUser.language}</p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default PayInstructor;
