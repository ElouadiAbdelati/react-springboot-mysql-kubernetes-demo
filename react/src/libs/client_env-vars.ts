const envSettings = window as any;
type TClientEnvVars = {
  API_URL: string;
};

export function clientEnvVars(): TClientEnvVars {
  return {
    API_URL: envSettings.API_URL ?? "http://localhost:8090",
  };
}
