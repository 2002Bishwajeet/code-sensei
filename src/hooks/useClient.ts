import { Client } from "appwrite";

export const useClient = () => {
  return new Client()
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECTID);
};
