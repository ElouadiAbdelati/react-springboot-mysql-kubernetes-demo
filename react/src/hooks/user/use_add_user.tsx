import { TUser } from "types/user";
import { useRestAPI } from "hooks/use_api";

export function useAddUser(onAddedUser: Function) {
  const api = useRestAPI();

  async function save(values: { name: string; email: string }) {
    const user = await api
      .post<TUser>("/users/", { name: values.name, email: values.email })
      .then((res) => res.data);
    onAddedUser(user);
  }
  return {
    save,
  };
}
