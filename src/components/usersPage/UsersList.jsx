import {} from "../../store/user/userSlice";

import { useEffect, useState } from "react";

import axios from "axios";
import { setUser } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      const { data } = await axios.get(url);
      setUsers(data);
    };

    fetchData().catch(console.error);
  }, []);

  const userDetail = (id) => {
    const user = users.find((x) => x.id === id);
    const { name, username, email, phone, website } = user;
    dispatch(
      setUser({
        id,
        name,
        username,
        email,
        phone,
        website,
      })
    );
  };

  return (
    <>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <button onClick={() => userDetail(user.id)}>{user.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersList;
