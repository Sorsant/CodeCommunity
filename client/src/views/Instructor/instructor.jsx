import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Instructore = () => {
  const users = useSelector(state => state.users);
  const location = useLocation();
  const ide = location.pathname.split("/")[2];
  const user = users.find(user => user.id === ide);

  return (
    <div>
      {console.log(ide)}
      {console.log(user)}
      <h1>Bienvenido al instructor {user ? user.name : "no hay"}</h1>
      
    </div>
  );
};

export default Instructore;
