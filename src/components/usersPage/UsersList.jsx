import {} from "../../store/user/userSlice";

import { useEffect, useState } from "react";

import axios from "axios";
import { setUser } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      const { data } = await axios.get(url);
      setUsers(data);
      setIsLoading(false);
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

  if (loading) {
    return (
      <>
        <progress className="progress w-56"></progress>
      </>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => userDetail(user.id)}
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersList;
