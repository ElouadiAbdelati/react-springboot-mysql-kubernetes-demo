import { TUser } from "types/user";
import useSWR from "swr";
import { TRestAPI, useRestAPI } from "hooks/use_api";

export function useGetAllUsers() {
  const api = useRestAPI();
  const { data, mutate, error } = useSWR(["/users/", api], getAllUsers);

  return {
    data: data ?? [],
    mutate,
    error,
    loading: !error && !data,
  };
}

async function getAllUsers(
  url: string,
  client: TRestAPI
): Promise<TUser[] | null> {
  return await client.get<TUser[]>(url).then((res) => res.data);
}
