import { TUser } from "types/user";

function DisplayUsers({ users }: { users: TUser[] }) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-blue-700"> Users!</h1>
      </div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default DisplayUsers;
