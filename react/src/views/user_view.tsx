import { AddUser, DisplayUsers } from "components/user";
import { useGetAllUsers } from "hooks/user/use_get_all_users";
import { useState } from "react";
import { TUser } from "types/user";

function UserView() {
  const { data } = useGetAllUsers();
  const [users, setUsers] = useState<TUser[]>(data);
  const handlAddedUser = (user: TUser) => {
    setUsers([...users, user]);
  };
  return (
    <div className="grid content-center ">
      <DisplayUsers users={users} />
      <AddUser onAddedUser={handlAddedUser} />
    </div>
  );
}

export default UserView;
