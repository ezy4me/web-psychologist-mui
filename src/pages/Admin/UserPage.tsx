import useUserStore from "@store/userStore";
import UserDataGrid from "@components/Admin/DataGrids/UserDataGrid";
import { useEffect } from "react";

const UserPage = () => {
  const { users, getUsers } = useUserStore((state) => ({
    users: state.users,
    getUsers: state.getUsers,
  }));

  useEffect(() => {
    const fetchData = async () => {
      await getUsers();
    };
    fetchData();
  }, []);
  return (
    <>
      <UserDataGrid data={users}/>
    </>
  );
};

export default UserPage;
