import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const el = useSelector((state) => state.user);

  useEffect(() => {
    setUser(el);
  }, [el]);

  return (
    <>
      <div className="">
        {user.id === 0 ? (
          ""
        ) : (
          <div className="flex flex-col gap-6 font-semibold">
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetail;
