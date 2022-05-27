import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import UserDetail from "../components/usersPage/UserDetail";
import UsersList from "../components/usersPage/UsersList";
import { reset } from "../store/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [location]);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-col m-10 flex-grow">
          <h1 className="font-semibold mb-16 text-5xl">Users</h1>
          <div className="flex gap-24 w-full">
            <UsersList />
            <UserDetail />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Users;
