import { useEffect, useState } from "react";

import axios from "axios";

const UsersList = () => {
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
    console.log(user);
  };

  return (
    <>
      <div>
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
