type TClientEnvVars = {
  API_URL: string;
};

export function clientEnvVars(): TClientEnvVars {
  return {
    API_URL: process.env.API_URL ?? "http://localhost:8090",
  };
}
