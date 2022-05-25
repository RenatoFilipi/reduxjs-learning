import UserDetail from "../components/usersPage/UserDetail";
import UsersList from "../components/usersPage/UsersList";

const Users = () => {
  return (
    <>
      <div className="flex gap-8">
        <UsersList />
        <UserDetail />
      </div>
    </>
  );
};

export default Users;
