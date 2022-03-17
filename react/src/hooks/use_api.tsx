import { clientEnvVars } from "libs/client_env-vars";
import { useMemo } from "react";
import axios from "redaxios";

export type TRestAPI = typeof axios;

export function useRestAPI(): TRestAPI {
  return useMemo(() => getRestAPI(), []);
}

export function getRestAPI(): TRestAPI {
  const url = clientEnvVars().API_URL;
  return axios.create({
    baseURL: url,
  });
}
